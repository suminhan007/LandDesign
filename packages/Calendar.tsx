import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components';
import Button from './Button';
import Icon from './Icon';
import Select from './Select';
import axios from 'axios';

type CalendarProps = {
  /** 语言 */
  language?: 'zh' | 'en';
  /** 最小年份 */
  minYear?: number;
  /** 最大年份 */
  maxYear?: number;
  /** 选择天数 */
  onDayChange?: (day: number, month: number, year: number) => void;
};

const Calendar: React.FC<CalendarProps> = ({
  language = 'zh',
  minYear = new Date().getFullYear(),
  maxYear = new Date().getFullYear(),
  onDayChange,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  }

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  /** 选择的年份 */
  const [inputYear, setInputYear] = useState<number>(new Date().getFullYear());
  const curDay = new Date().getDate();
  const curMonth = new Date().getMonth();
  const curYear = new Date().getFullYear();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(inputYear, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  /** 选择的日子 */
  const [selected, setSelected] = useState<number | undefined>(curDay);
  /** 获取节假日 */
  async function getHolidays(year) {
    try {
      const response = await axios.get(`https://date.nager.at/api/v3/publicholidays/${year}/CN`);
      return response.data;
    } catch (error) {
      return [];
    }
  }
  const CNHolidays = [];
  useEffect(() => {
    getHolidays(year).then(holidays => {
      holidays.forEach(holiday => {
        const holidayDate = holiday.date.split('-');
        CNHolidays.push({ date: `${Number(holidayDate[1])}-${Number(holidayDate[2])}`, zhName: holiday.localName, enName: holiday.name })
      });
    });
  }, [currentDate]);
  /** 切换月份 */
  const handlePrevMonth = () => {
    if (month <= 0) return;
    setCurrentDate(prevDate => {
      const prevMonth = prevDate.getMonth() - 1;
      return new Date(prevDate.getFullYear(), prevMonth, 1);
    });
    if (currentDate.getMonth() === curMonth) {
      setSelected(curDay);
    } else {
      setSelected(undefined);
    }
  };

  const handleNextMonth = () => {
    if (month >= 11) return;
    setCurrentDate(prevDate => {
      const nextMonth = prevDate.getMonth() + 1;
      return new Date(prevDate.getFullYear(), nextMonth, 1);
    });
    if (currentDate.getMonth() === curMonth) {
      setSelected(curDay);
    } else {
      setSelected(undefined);
    }
  };

  /** 月份切换禁用 */
  const monthPrevDisabled = useMemo(() => yearGap === 0 && month <= 0, [month]);
  const monthNextDisabled = useMemo(() => yearGap === 0 && month >= 11, [month]);

  const handleBackToDate = () => {
    setCurrentDate(new Date());
    setSelected(curDay);
  }
  // const handlePrevYear = () => {
  //   setCurrentDate(prevDate => {
  //     const prevYear = prevDate.getFullYear() - 1;
  //     return new Date(prevYear, prevDate.getMonth(), 1);
  //   });
  // };

  // const handleNextYear = () => {
  //   setCurrentDate(prevDate => {
  //     const nextYear = prevDate.getFullYear() + 1;
  //     return new Date(nextYear, prevDate.getMonth(), 1);
  //   });
  // };

  const handleYearChange = (year: number) => {
    if (!isNaN(year)) {
      setCurrentDate(prevDate => {
        return new Date(year, prevDate.getMonth(), 1);
      });
      /** 初始化状态 */
      if (year == curYear) {
        if (selected === undefined) {
          setSelected(curDay);
        }
      } else {
        setSelected(undefined);
      }
      setInputYear(year);
    }
  }


  const enMonth = useMemo(() => {
    return {
      1: { en: 'January', zh: '一月' },
      2: { en: 'February', zh: '二月' },
      3: { en: 'March', zh: '三月' },
      4: { en: 'April', zh: '四月' },
      5: { en: 'May', zh: '五月' },
      6: { en: 'June', zh: '六月' },
      7: { en: 'July', zh: '七月' },
      8: { en: 'August', zh: '八月' },
      9: { en: 'September', zh: '九月' },
      10: { en: 'October', zh: '十月' },
      11: { en: 'November', zh: '十一月' },
      12: { en: 'December', zh: '十二月' },
    };
  }, [month]);

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="land-calendar-item day empty"></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(<div
      key={i}
      className={`land-calendar-item day ${(year === curYear && month === curMonth && curDay === i) ? 'active' : ''} ${selected == i ? 'selected' : ''}`}
      onClick={() => { setSelected(i); onDayChange?.(i, month, year) }}
    >
      {i}
      {/* {(CNHolidays.map(h => h.date).includes(`${month}-${i}`)) && <div className='land-calendar-bottom-dot'></div>} */}
    </div>);
  }

  const weekdays = [
    { zh: '日', en: 'Su' },
    { zh: '一', en: 'Mo' },
    { zh: '二', en: 'Tu' },
    { zh: '三', en: 'We' },
    { zh: '四', en: 'Th' },
    { zh: '五', en: 'Fr' },
    { zh: '六', en: 'Sa' },
  ]

  const yearGap = useMemo(() => minYear > 0 && maxYear > 0 && maxYear > minYear ? maxYear - minYear : 0, [minYear, maxYear]);
  const years = [
    ...Array.from({ length: maxYear - minYear }).map((_i, idx) => ({
      value: minYear + idx, label: `${minYear + idx}`
    }))
  ]
  return (
    <StyledCalendarWrap className='land-calendar'>
      <div className='land-calendar-header'>
        <div className='land-calendar-year'>
          {yearGap === 0 ? <div>{curYear}</div> : <Select
            selected={inputYear}
            data={years}
            onChange={val => handleYearChange?.(Number(val.value))}
          />}
        </div>
        <div className='land-calendar-right-btn'>
          {language === 'zh' ? enMonth[month + 1].zh : enMonth[month + 1].en}
          {month !== curMonth && <Button type='text' icon={<Icon name='back' />} className='land-calendar-btn back' disabled={monthNextDisabled} pop='返回今天' onClick={handleBackToDate} />}
          <Button type='text' icon={<Icon name='arrow' />} className='land-calendar-btn prev' disabled={monthPrevDisabled} pop={monthPrevDisabled ? '不能再少了' : undefined} onClick={handlePrevMonth} />
          <Button type='text' icon={<Icon name='arrow' />} className='land-calendar-btn next' disabled={monthNextDisabled} pop={monthNextDisabled ? '不能再多了' : undefined} onClick={handleNextMonth} />
        </div>
      </div>
      <div className='land-calendar-weekdays'>
        {weekdays.map((w, wIndex) => <div key={wIndex} className='land-calendar-item weekday'>{language === 'zh' ? w.zh : w.en}</div>)}
      </div>
      <div className='land-calendar-days'>
        {days}
      </div>
    </StyledCalendarWrap>
  )
}

const StyledCalendarWrap = styled.div`
  &.land-calendar{

  }
  .land-calendar-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .land-calendar-right-btn{
      display: flex;
      gap: var(--gap-8);
      align-items: center;
    }
    .land-calendar-btn{
      &.prev svg{
        transform: rotate(90deg);
      }
      &.next svg{
        transform: rotate(-90deg);
      }
    }  
  }
  .land-calendar-weekdays,
  .land-calendar-days{
    display: grid;
    grid-template-columns: repeat(7,1fr);
    gap: var(--gap-4);
  }
  .land-calendar-item{
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-2);
    border-radius: var(--radius-4);
    transition: all 0.2s linear;
    will-change: background-color color;
    cursor: pointer;
    &.weekday{
      color: var(--color-text-5);
    }
    &.day{
      display: flex;
      flex-direction: column;
      align-items: center;
      &:hover{
        background-color: var(--color-bg-1);
      }
      &:active{
        background-color: var(--color-bg-2);
      }
      &.active{
        color: var(--color-primary-6);
        font-weight: 500;
      }
      &.active.selected{
        background-color: var(--color-primary-6);
        color: var(--color-text-white);
      }
      &.selected{
        background-color: var(--color-text-2);
        color: var(--color-text-white);
      }
    }
    .land-calendar-bottom-dot{
      width: 4px;
      height: 4px;
      background-color: var(--color-primary-6);
      border-radius: 100%;
    }
  }
`;

export default Calendar;
