import { CommonProps } from "../types";

import { IconApplication, IconHome, IconMore, IconMoreLine } from "./Nav";
import {
  IconRefresh,
  IconAvatar,
  IconCollection,
  IconConfigSetting,
  IconDark,
  IconFemale,
  IconLight,
  IconMale,
  IconPreviewClose,
  IconPreviewOpen,
  IconSearch,
  IconSetting,
  IconShare,
  IconTag,
  IconTranslate,
} from "./Interface";
import {
  IconImage,
  IconLoop,
  IconVideoFullWidth,
  IconVideoPause,
  IconVideoPlay,
  IconVideoSmallScreen,
  IconVolume,
  IconVolumeMuted,
} from "./Media";
import {
  IconAnnouncement,
  IconAudioFile,
  IconBook,
  IconClipboard,
  IconCodeFile,
  IconCodeFolder,
  IconDocument,
  IconDownload,
  IconUpload,
  IconEmail,
  IconEmailDownload,
  IconEmailFail,
  IconEmailOpen,
  IconEmailPush,
  IconEmailSuccess,
  IconFile,
  IconFileAdd,
  IconFolder,
  IconFolderAdd,
  IconFolderDownload,
  IconFolderUpload,
  IconFormattingBrush,
  IconInstruction,
  IconLink,
  IconListView,
  IconLog,
  IconNotePad,
  IconPlan,
  IconSchedule,
  IconStarFile,
  IconTextFile,
  IconTextScan,
  IconWebAdd,
  IconWebPage,
  IconCalendar,
} from "./File";

import {
  IconBankCard,
  IconCommodity,
  IconConsume,
  IconCoupon,
  IconDollar,
  IconTicket,
} from "./Ecommerce";
import {
  IconAttention,
  IconAttentionFill,
  IconAttentionStroke,
  IconCheck,
  IconCheckFill,
  IconCheckStroke,
  IconError,
  IconErrorFill,
  IconErrorStroke,
  IconHourglassEmpty,
  IconHourglassFull,
  IconIncrease,
  IconInfo,
  IconInfoFill,
  IconInfoStroke,
  IconQuestion,
  IconQuestionFill,
  IconQuestionStroke,
} from "./State";
import {
  IconAdd,
  IconAdjustment,
  IconAhead,
  IconAlphabeticalSorting,
  IconAlphabeticalSortingReverse,
  IconBack,
  IconBrightness,
  IconClear,
  IconClearFormate,
  IconClipEdit,
  IconClose,
  IconCloseCircle,
  IconCollapse,
  IconColorPicker,
  IconCopy,
  IconCursorMove,
  IconDashAdd,
  IconDelete,
  IconDrag,
  IconEdit,
  IconFilter,
  IconLastStep,
  IconLayerBack,
  IconLayerFront,
  IconLike,
  IconLineBreak,
  IconLock,
  IconMergeCells,
  IconNextStep,
  IconOut,
  IconPen,
  IconQuote,
  IconReload,
  IconScan,
  IconSort,
  IconSortAscending,
  IconSortDescending,
  IconSplitCells,
  IconSquareAdd,
  IconStar,
  IconSwitchGear,
  IconToggle,
  IconUndo,
  IconUnlock,
  IconZoomIn,
  IconZoomInArrow,
  IconZoomInBtn,
  IconZoomOut,
  IconZoomOutArrow,
  IconZoomOutBtn,
} from "./Operate";
import {
  IconAlignBottom,
  IconAlignBottomCenter,
  IconAlignBottomLeft,
  IconAlignBottomRight,
  IconAlignHorizontalBottom,
  IconAlignHorizontalCenter,
  IconAlignHorizontalTop,
  IconAlignHorizontally,
  IconAlignLeft,
  IconAlignLeftBottom,
  IconAlignLeftCenter,
  IconAlignLeftTop,
  IconAlignRight,
  IconAlignRightBottom,
  IconAlignRightCenter,
  IconAlignRightTop,
  IconAlignTop,
  IconAlignTopCenter,
  IconAlignTopLeft,
  IconAlignTopRight,
  IconAlignVerticalCenter,
  IconAlignVerticalLeft,
  IconAlignVerticalRight,
  IconAlignVertically,
  IconAlphabetList,
  IconCheckList,
  IconCheckboxList,
  IconDeleteStrike,
  IconDropShadowDown,
  IconDropShadowLeft,
  IconDropShadowRight,
  IconDropShadowUp,
  IconFlipHorizontally,
  IconFlipVertically,
  IconFontSize,
  IconIndentLeft,
  IconIndentRight,
  IconInnerShadowDown,
  IconInnerShadowLeft,
  IconInnerShadowRight,
  IconInnerShadowUp,
  IconLayer,
  IconLineHeight,
  IconLineWidth,
  IconMask,
  IconNumberList,
  IconRadioList,
  IconTail,
  IconTextAlignCenter,
  IconTextAlignJustify,
  IconTextAlignLeft,
  IconTextAlignMiddle,
  IconTextAlignRight,
  IconTextBold,
  IconTextItalic,
  IconTextUnderline,
  IconTitleH1,
  IconTitleH2,
  IconTitleH3,
} from "./Style";
import {
  IconArrow,
  IconArrowDouble,
  IconArrowLine,
  IconArrowNav,
  IconArrowTo,
  IconArrowTriangle,
} from "./Arrow";
import { IconCamera } from "./DeviceTool";

export type IconProps = {
  fill?: string;
  stroke?: string;
  size?: number;
  strokeWidth?: number;
  onClick?: (e: any) => void;
  [key: string]: any;
} & CommonProps;

export type IconDefaultProps = {
  name: string;
} & IconProps;

const Icon: React.FC<IconDefaultProps> = ({ name, ...restProps }) => {
  // const getIcon =  {
  //   // 导航
  //   ['home']: () => (<IconHome {...restProps} />),
  //   ['application']: () => (<IconApplication {...restProps} />),
  //   ['more']: () => (<IconMore {...restProps} />),
  //   ['more-line']: () => (<IconMoreLine {...restProps} />),
  //   ['search']: () => (<IconSearch {...restProps} />),
  //   // 社交媒体
  //   ['refresh']: () => (<IconRefresh {...restProps} />),
  //   ['female']: () => (<IconFemale {...restProps} />),
  //   ['male']: () => (<IconMale {...restProps} />),
  //   ['preview-open']: () => (<IconPreviewOpen {...restProps} />),
  //   ['preview-close']: () => (<IconPreviewClose {...restProps} />),
  //   ['avatar']: () => (<IconAvatar {...restProps} />),
  //   ['tag']: () => (<IconTag {...restProps} />),
  //   ['setting']: () => (<IconSetting {...restProps} />),
  //   ['config-setting']: () => (<IconConfigSetting {...restProps} />),
  //   ['collection']: () => (<IconCollection {...restProps} />),
  //   ['share']: () => (<IconShare {...restProps} />),
  //   ['translate']: () => (<IconTranslate {...restProps} />),
  //   ['light']: () => (<IconLight {...restProps} />),
  //   ['dark']: () => (<IconDark {...restProps} />),
  //   // 媒体控制
  //   ['image']: () => (<IconImage {...restProps} />),
  //   ['video-play']: () => (<IconVideoPlay {...restProps} />),
  //   ['video-pause']: () => (<IconVideoPause {...restProps} />),
  //   ['volume']: () => (<IconVolume {...restProps} />),
  //   ['volume-muted']: () => (<IconVolumeMuted {...restProps} />),
  //   ['video-small-screen']: () => (<IconVideoSmallScreen {...restProps} />),
  //   ['video-full-width']: () => (<IconVideoFullWidth {...restProps} />),
  //   ['loop']: () => (<IconLoop {...restProps} />),
  //   // 文件和文档
  //   ['file']: () => (<IconFile {...restProps} />),
  //   ['download']: () => (<IconDownload {...restProps} />),
  //   ['upload']: () => (<IconUpload {...restProps} />),
  //   ['web-add']: () => (<IconWebAdd {...restProps} />),
  //   ['announcement']: () => (<IconAnnouncement {...restProps} />),
  //   ['audio-file']: () => (<IconAudioFile {...restProps} />),
  //   ['book']: () => (<IconBook {...restProps} />),
  //   ['clipboard']: () => (<IconClipboard {...restProps} />),
  //   ['document']: () => (<IconDocument {...restProps} />),
  //   ['email']: () => (<IconEmail {...restProps} />),
  //   ['email-download']: () => (<IconEmailDownload {...restProps} />),
  //   ['email-push']: () => (<IconEmailPush {...restProps} />),
  //   ['email-success']: () => (<IconEmailSuccess {...restProps} />),
  //   ['email-fail']: () => (<IconEmailFail {...restProps} />),
  //   ['email-open']: () => (<IconEmailOpen {...restProps} />),
  //   ['file-add']: () => (<IconFileAdd {...restProps} />),
  //   ['code-file']: () => (<IconCodeFile {...restProps} />),
  //   ['star-file']: () => (<IconStarFile {...restProps} />),
  //   ['text-file']: () => (<IconTextFile {...restProps} />),
  //   ['folder']: () => (<IconFolder {...restProps} />),
  //   ['folder-download']: () => (<IconFolderDownload {...restProps} />),
  //   ['folder-upload']: () => (<IconFolderUpload {...restProps} />),
  //   ['folder-add']: () => (<IconFolderAdd {...restProps} />),
  //   ['code-folder']: () => (<IconCodeFolder {...restProps} />),
  //   ['formatting-brush']: () => (<IconFormattingBrush {...restProps} />),
  //   ['instruction']: () => (<IconInstruction {...restProps} />),
  //   ['list-view']: () => (<IconListView {...restProps} />),
  //   ['link']: () => (<IconLink {...restProps} />),
  //   ['log']: () => (<IconLog {...restProps} />),
  //   ['note-pad']: () => (<IconNotePad {...restProps} />),
  //   ['schedule']: () => (<IconSchedule {...restProps} />),
  //   ['text-scan']: () => (<IconTextScan {...restProps} />),
  //   ['web-page']: () => (<IconWebPage {...restProps} />),
  //   ['plan']: () => (<IconPlan {...restProps} />),
  //   ['calendar']: () => (<IconCalendar {...restProps} />),
  //   // 电子商务
  //   ['coupon']: () => (<IconCoupon {...restProps} />),
  //   ['ticket']: () => (<IconTicket {...restProps} />),
  //   ['bank-card']: () => (<IconBankCard {...restProps} />),
  //   ['consume']: () => (<IconConsume {...restProps} />),
  //   ['commodity']: () => (<IconCommodity {...restProps} />),
  //   ['dollar']: () => (<IconDollar {...restProps} />),
  //   // 反馈和状态
  //   ['check']: () => (<IconCheck {...restProps} />),
  //   ['check-fill']: () => (<IconCheckFill {...restProps} />),
  //   ['check-stroke']: () => (<IconCheckStroke {...restProps} />),
  //   ['error']: () => (<IconError {...restProps} />),
  //   ['error-fill']: () => (<IconErrorFill {...restProps} />),
  //   ['error-stroke']: () => (<IconErrorStroke {...restProps} />),
  //   ['info']: () => (<IconInfo {...restProps} />),
  //   ['info-fill']: () => (<IconInfoFill {...restProps} />),
  //   ['info-stroke']: () => (<IconInfoStroke {...restProps} />),
  //   ['attention']: () => (<IconAttention {...restProps} />),
  //   ['attention-fill']: () => (<IconAttentionFill {...restProps} />),
  //   ['attention-stroke']: () => (<IconAttentionStroke {...restProps} />),
  //   ['question']: () => (<IconQuestion {...restProps} />),
  //   ['question-fill']: () => (<IconQuestionFill {...restProps} />),
  //   ['question-stroke']: () => (<IconQuestionStroke {...restProps} />),
  //   ['hourglass-empty']: () => (<IconHourglassEmpty {...restProps} />),
  //   ['hourglass-full']: () => (<IconHourglassFull {...restProps} />),
  //   ['increase']: () => (<IconIncrease {...restProps} />),
  //   // 通信
  //   // 操作
  //   ['switch-gear']: () => (<IconSwitchGear {...restProps} />),
  //   ['toggle']: () => (<IconToggle {...restProps} />),
  //   ['collapse']: () => (<IconCollapse {...restProps} />),
  //   ['reload']: () => (<IconReload {...restProps} />),
  //   ['undo']: () => (<IconUndo {...restProps} />),
  //   ['sort']: () => (<IconSort {...restProps} />),
  //   ['sort-descending']: () => (<IconSortDescending {...restProps} />),
  //   ['sort-ascending']: () => (<IconSortAscending {...restProps} />),
  //   ['back']: () => (<IconBack {...restProps} />),
  //   ['last-step']: () => (<IconLastStep {...restProps} />),
  //   ['next-step']: () => (<IconNextStep {...restProps} />),
  //   ['ahead']: () => (<IconAhead {...restProps} />),
  //   ['drag']: () => (<IconDrag {...restProps} />),
  //   ['add']: () => (<IconAdd {...restProps} />),
  //   ['square-add']: () => (<IconSquareAdd {...restProps} />),
  //   ['dash-add']: () => (<IconDashAdd {...restProps} />),
  //   ['delete']: () => (<IconDelete {...restProps} />),
  //   ['copy']: () => (<IconCopy {...restProps} />),
  //   ['close']: () => (<IconClose {...restProps} />),
  //   ['close-circle']: () => (<IconCloseCircle {...restProps} />),
  //   ['clear']: () => (<IconClear {...restProps} />),
  //   ['clear-formate']: () => (<IconClearFormate {...restProps} />),
  //   ['color-picker']: () => (<IconColorPicker {...restProps} />),
  //   ['zoom-in-arrow']: () => (<IconZoomInArrow {...restProps} />),
  //   ['zoom-out-arrow']: () => (<IconZoomOutArrow {...restProps} />),
  //   ['zoom-in']: () => (<IconZoomIn {...restProps} />),
  //   ['zoom-out']: () => (<IconZoomOut {...restProps} />),
  //   ['zoom-in-btn']: () => (<IconZoomInBtn {...restProps} />),
  //   ['zoom-out-btn']: () => (<IconZoomOutBtn {...restProps} />),
  //   ['out']: () => (<IconOut {...restProps} />),
  //   ['adjustment']: () => (<IconAdjustment {...restProps} />),
  //   ['alphabetical-sorting']: () => (<IconAlphabeticalSorting {...restProps} />),
  //   ['alphabetical-sorting-reverse']: () => (<IconAlphabeticalSortingReverse {...restProps} />),
  //   ['brightness']: () => (<IconBrightness {...restProps} />),
  //   ['layer']: () => (<IconLayer {...restProps} />),
  //   ['layer-back']: () => (<IconLayerBack {...restProps} />),
  //   ['layer-front']: () => (<IconLayerFront {...restProps} />),
  //   ['edit']: () => (<IconEdit {...restProps} />),
  //   ['clip-edit']: () => (<IconClipEdit {...restProps} />),
  //   ['filter']: () => (<IconFilter {...restProps} />),
  //   ['lock']: () => (<IconLock {...restProps} />),
  //   ['unlock']: () => (<IconUnlock {...restProps} />),
  //   ['merge-cells']: () => (<IconMergeCells {...restProps} />),
  //   ['split-cells']: () => (<IconSplitCells {...restProps} />),
  //   ['cursor-move']: () => (<IconCursorMove {...restProps} />),
  //   ['quote']: () => (<IconQuote {...restProps} />),
  //   ['scan']: () => (<IconScan {...restProps} />),
  //   ['like']: () => (<IconLike {...restProps} />),
  //   ['star']: () => (<IconStar {...restProps} />),
  //   ['pen']: () => (<IconPen {...restProps} />),
  //   // 方向和箭头
  //   ['arrow']: () => (<IconArrow {...restProps} />),
  //   ['arrow-line']: () => (<IconArrowLine {...restProps} />),
  //   ['arrow-triangle']: () => (<IconArrowTriangle {...restProps} />),
  //   ['arrow-to']: () => (<IconArrowTo {...restProps} />),
  //   ['arrow-nav']: () => (<IconArrowNav {...restProps} />),
  //   ['arrow-double']: () => (<IconArrowDouble {...restProps} />),
  //   // 设备
  //   ['camera']: () => (<IconCamera {...restProps} />),
  //   ['align-top']: () => (<IconAlignTop {...restProps} />),
  //   ['align-bottom']: () => (<IconAlignBottom {...restProps} />),
  //   ['align-left']: () => (<IconAlignLeft {...restProps} />),
  //   ['align-right']: () => (<IconAlignRight {...restProps} />),
  //   ['align-horizontally']: () => (<IconAlignHorizontally {...restProps} />),
  //   ['align-vertically']: () => (<IconAlignVertically {...restProps} />),
  //   ['text-align-left']: () => (<IconTextAlignLeft {...restProps} />),
  //   ['text-align-right']: () => (<IconTextAlignRight {...restProps} />),
  //   ['text-align-center']: () => (<IconTextAlignCenter {...restProps} />),
  //   ['text-align-justify']: () => (<IconTextAlignJustify {...restProps} />),
  //   ['text-align-middle']: () => (<IconTextAlignMiddle {...restProps} />),
  //   ['align-bottom-left']: () => (<IconAlignBottomLeft {...restProps} />),
  //   ['align-bottom-right']: () => (<IconAlignBottomRight {...restProps} />),
  //   ['align-bottom-center']: () => (<IconAlignBottomCenter {...restProps} />),
  //   ['align-horizontal-top']: () => (<IconAlignHorizontalTop {...restProps} />),
  //   ['align-horizontal-bottom']: () => (<IconAlignHorizontalBottom {...restProps} />),
  //   ['align-horizontal-center']: () => (<IconAlignHorizontalCenter {...restProps} />),
  //   ['align-left-top']: () => (<IconAlignLeftTop {...restProps} />),
  //   ['align-left-bottom']: () => (<IconAlignLeftBottom {...restProps} />),
  //   ['align-left-center']: () => (<IconAlignLeftCenter {...restProps} />),
  //   ['align-right-top']: () => (<IconAlignRightTop {...restProps} />),
  //   ['align-right-bottom']: () => (<IconAlignRightBottom {...restProps} />),
  //   ['align-right-center']: () => (<IconAlignRightCenter {...restProps} />),
  //   ['align-top-left']: () => (<IconAlignTopLeft {...restProps} />),
  //   ['align-top-right']: () => (<IconAlignTopRight {...restProps} />),
  //   ['align-top-center']: () => (<IconAlignTopCenter {...restProps} />),
  //   ['align-vertical-left']: () => (<IconAlignVerticalLeft {...restProps} />),
  //   ['align-vertical-right']: () => (<IconAlignVerticalRight {...restProps} />),
  //   ['align-vertical-center']: () => (<IconAlignVerticalCenter {...restProps} />),
  //   ['flip-horizontally']: () => (<IconFlipHorizontally {...restProps} />),
  //   ['flip-vertically']: () => (<IconFlipVertically {...restProps} />),
  //   ['font-size']: () => (<IconFontSize {...restProps} />),
  //   ['line-height']: () => (<IconLineHeight {...restProps} />),
  //   ['text-bold']: () => (<IconTextBold {...restProps} />),
  //   ['text-italic']: () => (<IconTextItalic {...restProps} />),
  //   ['text-underline']: () => (<IconTextUnderline {...restProps} />),
  //   ['line-width']: () => (<IconLineWidth {...restProps} />),
  //   ['line-break']: () => (<IconLineBreak {...restProps} />),
  //   ['title1']: () => (<IconTitleH1 {...restProps} />),
  //   ['title2']: () => (<IconTitleH2 {...restProps} />),
  //   ['title3']: () => (<IconTitleH3 {...restProps} />),
  //   ['indent-left']: () => (<IconIndentLeft {...restProps} />),
  //   ['indent-right']: () => (<IconIndentRight {...restProps} />),
  //   ['drop-shadow-up']: () => (<IconDropShadowUp {...restProps} />),
  //   ['drop-shadow-down']: () => (<IconDropShadowDown {...restProps} />),
  //   ['drop-shadow-left']: () => (<IconDropShadowLeft {...restProps} />),
  //   ['drop-shadow-right']: () => (<IconDropShadowRight {...restProps} />),
  //   ['inner-shadow-up']: () => (<IconInnerShadowUp {...restProps} />),
  //   ['inner-shadow-down']: () => (<IconInnerShadowDown {...restProps} />),
  //   ['inner-shadow-left']: () => (<IconInnerShadowLeft {...restProps} />),
  //   ['inner-shadow-right']: () => (<IconInnerShadowRight {...restProps} />),
  //   ['check-list']: () => (<IconCheckList {...restProps} />),
  //   ['alphabet-list']: () => (<IconAlphabetList {...restProps} />),
  //   ['checkbox-list']: () => (<IconCheckboxList {...restProps} />),
  //   ['radio-list']: () => (<IconRadioList {...restProps} />),
  //   ['number-list']: () => (<IconNumberList {...restProps} />),
  //   ['mask']: () => (<IconMask {...restProps} />),
  //   ['delete-strike']: () => (<IconDeleteStrike {...restProps} />),
  //   ['tail']: () => (<IconTail {...restProps} />),
  //   // 天气和自然
  //   // 交通和位置
  //   // 食物
  // }
  switch (name) {
    // 导航
    case "home":
      return <IconHome {...restProps} />;
      break;
    case "application":
      return <IconApplication {...restProps} />;
      break;
    case "more":
      return <IconMore {...restProps} />;
      break;
    case "more-line":
      return <IconMoreLine {...restProps} />;
      break;
    //社交媒体

    // 用户界面
    case "refresh":
      return <IconRefresh {...restProps} />;
      break;
    case "female":
      return <IconFemale {...restProps} />;
      break;
    case "male":
      return <IconMale {...restProps} />;
      break;
    case "preview-open":
      return <IconPreviewOpen {...restProps} />;
      break;
    case "preview-close":
      return <IconPreviewClose {...restProps} />;
      break;
    case "avatar":
      return <IconAvatar {...restProps} />;
      break;
    case "tag":
      return <IconTag {...restProps} />;
      break;
    case "setting":
      return <IconSetting {...restProps} />;
      break;
    case "config-setting":
      return <IconConfigSetting {...restProps} />;
      break;
    case "collection":
      return <IconCollection {...restProps} />;
      break;
    case "share":
      return <IconShare {...restProps} />;
      break;
    case "translate":
      return <IconTranslate {...restProps} />;
      break;
    case "light":
      return <IconLight {...restProps} />;
      break;
    case "dark":
      return <IconDark {...restProps} />;
      break;
    case "search":
      return <IconSearch {...restProps} />;
      break;

    //媒体控制
    case "image":
      return <IconImage {...restProps} />;
      break;
    case "video-play":
      return <IconVideoPlay {...restProps} />;
      break;
    case "video-pause":
      return <IconVideoPause {...restProps} />;
      break;
    case "volume":
      return <IconVolume {...restProps} />;
      break;
    case "volume-muted":
      return <IconVolumeMuted {...restProps} />;
      break;
    case "video-small-screen":
      return <IconVideoSmallScreen {...restProps} />;
      break;
    case "video-full-width":
      return <IconVideoFullWidth {...restProps} />;
      break;
    case "loop":
      return <IconLoop {...restProps} />;
      break;

    // 文件和文档
    case "file":
      return <IconFile {...restProps} />;
      break;
    case "download":
      return <IconDownload {...restProps} />;
      break;
    case "upload":
      return <IconUpload {...restProps} />;
      break;
    case "web-add":
      return <IconWebAdd {...restProps} />;
      break;
    case "announcement":
      return <IconAnnouncement {...restProps} />;
      break;
    case "audio-file":
      return <IconAudioFile {...restProps} />;
      break;
    case "book":
      return <IconBook {...restProps} />;
      break;
    case "clipboard":
      return <IconClipboard />;
      break;
    case "document":
      return <IconDocument {...restProps} />;
      break;
    case "email-download":
      return <IconEmailDownload {...restProps} />;
      break;
    case "email-push":
      return <IconEmailPush {...restProps} />;
      break;
    case "email-success":
      return <IconEmailSuccess {...restProps} />;
      break;
    case "email-fail":
      return <IconEmailFail {...restProps} />;
      break;
    case "file-add":
      return <IconFileAdd {...restProps} />;
      break;
    case "code-file":
      return <IconCodeFile {...restProps} />;
      break;
    case "star-file":
      return <IconStarFile {...restProps} />;
      break;
    case "text-file":
      return <IconTextFile {...restProps} />;
      break;
    case "folder":
      return <IconFolder {...restProps} />;
      break;
    case "code-folder":
      return <IconCodeFolder {...restProps} />;
      break;
    case "folder-download":
      return <IconFolderDownload {...restProps} />;
      break;
    case "folder-add":
      return <IconFolderAdd {...restProps} />;
      break;
    case "folder-upload":
      return <IconFolderUpload {...restProps} />;
      break;
    case "formatting-brush":
      return <IconFormattingBrush {...restProps} />;
      break;
    case "instruction":
      return <IconInstruction {...restProps} />;
      break;
    case "list-view":
      return <IconListView {...restProps} />;
      break;
    case "link":
      return <IconLink {...restProps} />;
      break;
    case "log":
      return <IconLog {...restProps} />;
      break;
    case "email":
      return <IconEmail {...restProps} />;
      break;
    case "email-open":
      return <IconEmailOpen {...restProps} />;
      break;
    case "note-pad":
      return <IconNotePad {...restProps} />;
      break;
    case "schedule":
      return <IconSchedule {...restProps} />;
      break;
    case "text-scan":
      return <IconTextScan {...restProps} />;
      break;
    case "web-page":
      return <IconWebPage {...restProps} />;
      break;
    case "plan":
      return <IconPlan {...restProps} />;
      break;
    case "calendar":
      return <IconCalendar {...restProps} />;
      break;
    // 电子商务
    case "coupon":
      return <IconCoupon {...restProps} />;
      break;
    case "ticket":
      return <IconTicket {...restProps} />;
      break;
    case "bank-card":
      return <IconBankCard {...restProps} />;
      break;
    case "consume":
      return <IconConsume {...restProps} />;
      break;
    case "commodity":
      return <IconCommodity {...restProps} />;
      break;
    case "dollar":
      return <IconDollar {...restProps} />;
      break;

    // 反馈和状态
    case "check-stroke":
      return <IconCheckStroke {...restProps} />;
      break;
    case "check-fill":
      return <IconCheckFill {...restProps} />;
      break;
    case "check":
      return <IconCheck {...restProps} />;
      break;
    case "error-stroke":
      return <IconErrorStroke {...restProps} />;
      break;
    case "error-fill":
      return <IconErrorFill {...restProps} />;
      break;
    case "error":
      return <IconError {...restProps} />;
      break;
    case "info-stroke":
      return <IconInfoStroke {...restProps} />;
      break;
    case "info-fill":
      return <IconInfoFill {...restProps} />;
      break;
    case "info":
      return <IconInfo {...restProps} />;
      break;
    case "attention-stroke":
      return <IconAttentionStroke {...restProps} />;
      break;
    case "attention-fill":
      return <IconAttentionFill {...restProps} />;
      break;
    case "attention":
      return <IconAttention {...restProps} />;
      break;
    case "question-stroke":
      return <IconQuestionStroke {...restProps} />;
      break;
    case "question-fill":
      return <IconQuestionFill {...restProps} />;
      break;
    case "question":
      return <IconQuestion {...restProps} />;
      break;
    case "hourglass-empty":
      return <IconHourglassEmpty {...restProps} />;
      break;
    case "hourglass-full":
      return <IconHourglassFull {...restProps} />;
      break;
    case "increase":
      return <IconIncrease {...restProps} />;
      break;

    // 通信

    // 操作
    case "switch-gear":
      return <IconSwitchGear {...restProps} />;
      break;
    case "toggle":
      return <IconToggle {...restProps} />;
      break;
    case "collapse":
      return <IconCollapse {...restProps} />;
      break;
    case "reload":
      return <IconReload {...restProps} />;
      break;
    case "undo":
      return <IconUndo {...restProps} />;
      break;
    case "sort":
      return <IconSort {...restProps} />;
      break;
    case "sort-descending":
      return <IconSortDescending {...restProps} />;
      break;
    case "sort-ascending":
      return <IconSortAscending {...restProps} />;
      break;
    case "back":
      return <IconBack {...restProps} />;
      break;
    case "last-step":
      return <IconLastStep {...restProps} />;
      break;
    case "next-step":
      return <IconNextStep {...restProps} />;
      break;
    case "ahead":
      return <IconAhead {...restProps} />;
      break;
    case "drag":
      return <IconDrag {...restProps} />;
      break;
    case "add":
      return <IconAdd {...restProps} />;
      break;
    case "square-add":
      return <IconSquareAdd {...restProps} />;
      break;
    case "dash-add":
      return <IconDashAdd {...restProps} />;
      break;
    case "clear":
      return <IconClear {...restProps} />;
      break;
    case "delete":
      return <IconDelete {...restProps} />;
      break;
    case "copy":
      return <IconCopy {...restProps} />;
      break;
    case "close":
      return <IconClose {...restProps} />;
      break;
    case "close-circle":
      return <IconCloseCircle {...restProps} />;
      break;
    case "color-picker":
      return <IconColorPicker {...restProps} />;
      break;
    case "zoom-in-arrow":
      return <IconZoomInArrow {...restProps} />;
      break;
    case "zoom-out-arrow":
      return <IconZoomOutArrow {...restProps} />;
      break;
    case "zoom-in":
      return <IconZoomIn {...restProps} />;
      break;
    case "zoom-out":
      return <IconZoomOut {...restProps} />;
      break;
    case "zoom-in-btn":
      return <IconZoomInBtn {...restProps} />;
      break;
    case "zoom-out-btn":
      return <IconZoomOutBtn {...restProps} />;
      break;
    case "out":
      return <IconOut {...restProps} />;
      break;
    case "adjustment":
      return <IconAdjustment {...restProps} />;
      break;
    case "alphabetical-sorting":
      return <IconAlphabeticalSorting {...restProps} />;
      break;
    case "alphabetical-sorting-reverse":
      return <IconAlphabeticalSortingReverse {...restProps} />;
      break;
    case "brightness":
      return <IconBrightness {...restProps} />;
    case "layer":
      return <IconLayer {...restProps} />;
      break;
    case "layer-front":
      return <IconLayerFront {...restProps} />;
      break;
    case "layer-back":
      return <IconLayerBack {...restProps} />;
      break;
    case "clear-formate":
      return <IconClearFormate {...restProps} />;
      break;
    case "edit":
      return <IconEdit {...restProps} />;
      break;
    case "clip-edit":
      return <IconClipEdit {...restProps} />;
      break;
    case "filter":
      return <IconFilter {...restProps} />;
      break;
    case "lock":
      return <IconLock {...restProps} />;
      break;
    case "unlock":
      return <IconUnlock {...restProps} />;
      break;
    case "merge-cells":
      return <IconMergeCells {...restProps} />;
      break;
    case "split-cells":
      return <IconSplitCells {...restProps} />;
      break;
    case "cursor-move":
      return <IconCursorMove {...restProps} />;
      break;
    case "line-break":
      return <IconLineBreak {...restProps} />;
      break;
    case "quote":
      return <IconQuote {...restProps} />;
      break;
    case "scan":
      return <IconScan {...restProps} />;
      break;
    case "like":
      return <IconLike {...restProps} />;
      break;
    case "star":
      return <IconStar {...restProps} />;
      break;
    case "pen":
      return <IconPen {...restProps} />;
      break;

    //   方向和箭头
    case "arrow-line":
      return <IconArrowLine {...restProps} />;
      break;
    case "arrow-double":
      return <IconArrowDouble {...restProps} />;
      break;
    case "arrow":
      return <IconArrow {...restProps} />;
      break;
    case "arrow-triangle":
      return <IconArrowTriangle {...restProps} />;
      break;
    case "arrow-to":
      return <IconArrowTo {...restProps} />;
      break;
    case "arrow-nav":
      return <IconArrowNav {...restProps} />;
      break;

    // 设备和工具
    case "camera":
      return <IconCamera {...restProps} />;
      break;
    //样式
    case "align-bottom":
      return <IconAlignBottom {...restProps} />;
      break;
    case "align-top":
      return <IconAlignTop {...restProps} />;
      break;
    case "align-left":
      return <IconAlignLeft {...restProps} />;
      break;
    case "align-right":
      return <IconAlignRight {...restProps} />;
      break;
    case "align-horizontally":
      return <IconAlignHorizontally {...restProps} />;
      break;
    case "align-vertically":
      return <IconAlignVertically {...restProps} />;
      break;
    case "text-align-left":
      return <IconTextAlignLeft {...restProps} />;
      break;
    case "text-align-right":
      return <IconTextAlignRight {...restProps} />;
      break;
    case "text-align-center":
      return <IconTextAlignCenter {...restProps} />;
      break;
    case "text-align-justify":
      return <IconTextAlignJustify {...restProps} />;
      break;
    case "text-align-middle":
      return <IconTextAlignMiddle {...restProps} />;
      break;
    case "align-bottom-center":
      return <IconAlignBottomCenter {...restProps} />;
      break;
    case "align-bottom-left":
      return <IconAlignBottomLeft {...restProps} />;
      break;
    case "align-bottom-right":
      return <IconAlignBottomRight {...restProps} />;
      break;
    case "align-horizontal-bottom":
      return <IconAlignHorizontalBottom {...restProps} />;
      break;
    case "align-horizontal-center":
      return <IconAlignHorizontalCenter {...restProps} />;
      break;
    case "align-horizontal-top":
      return <IconAlignHorizontalTop {...restProps} />;
      break;
    case "align-left-bottom":
      return <IconAlignLeftBottom {...restProps} />;
      break;
    case "align-left-center":
      return <IconAlignLeftCenter {...restProps} />;
      break;
    case "align-left-top":
      return <IconAlignLeftTop {...restProps} />;
      break;
    case "align-right-bottom":
      return <IconAlignRightBottom {...restProps} />;
      break;
    case "align-right-center":
      return <IconAlignRightCenter {...restProps} />;
      break;
    case "align-right-top":
      return <IconAlignRightTop {...restProps} />;
      break;
    case "align-top-center":
      return <IconAlignTopCenter {...restProps} />;
      break;
    case "align-top-left":
      return <IconAlignTopLeft {...restProps} />;
      break;
    case "align-top-right":
      return <IconAlignTopRight {...restProps} />;
      break;
    case "align-vertical-left":
      return <IconAlignVerticalLeft {...restProps} />;
      break;
    case "align-vertical-center":
      return <IconAlignVerticalCenter {...restProps} />;
      break;
    case "align-vertical-right":
      return <IconAlignVerticalRight {...restProps} />;
      break;
    case "flip-horizontally":
      return <IconFlipHorizontally {...restProps} />;
      break;
    case "flip-vertically":
      return <IconFlipVertically {...restProps} />;
      break;
    case "font-size":
      return <IconFontSize {...restProps} />;
      break;
    case "line-height":
      return <IconLineHeight {...restProps} />;
      break;
    case "text-bold":
      return <IconTextBold {...restProps} />;
      break;
    case "text-italic":
      return <IconTextItalic {...restProps} />;
      break;
    case "text-underline":
      return <IconTextUnderline {...restProps} />;
      break;
    case "line-width":
      return <IconLineWidth {...restProps} />;
      break;
    case "line-break":
      return <IconLineBreak {...restProps} />;
      break;
    case "title-h1":
      return <IconTitleH1 {...restProps} />;
      break;
    case "title-h2":
      return <IconTitleH2 {...restProps} />;
      break;
    case "title-h3":
      return <IconTitleH3 {...restProps} />;
      break;
    case "indent-left":
      return <IconIndentLeft {...restProps} />;
      break;
    case "indent-right":
      return <IconIndentRight {...restProps} />;
      break;
    case "drop-shadow-up":
      return <IconDropShadowUp {...restProps} />;
      break;
    case "drop-shadow-down":
      return <IconDropShadowDown {...restProps} />;
      break;
    case "drop-shadow-left":
      return <IconDropShadowLeft {...restProps} />;
      break;
    case "drop-shadow-right":
      return <IconDropShadowRight {...restProps} />;
      break;
    case "inner-shadow-up":
      return <IconInnerShadowUp {...restProps} />;
      break;
    case "inner-shadow-down":
      return <IconInnerShadowDown {...restProps} />;
      break;
    case "inner-shadow-left":
      return <IconInnerShadowLeft {...restProps} />;
      break;
    case "inner-shadow-right":
      return <IconInnerShadowRight {...restProps} />;
      break;
    case "layer":
      return <IconLayer {...restProps} />;
      break;
    case "check-list":
      return <IconCheckList {...restProps} />;
      break;
    case "alphabet-list":
      return <IconAlphabetList {...restProps} />;
      break;
    case "checkbox-list":
      return <IconCheckboxList {...restProps} />;
      break;
    case "radio-list":
      return <IconRadioList {...restProps} />;
      break;
    case "number-list":
      return <IconNumberList {...restProps} />;
      break;
    case "mask":
      return <IconMask {...restProps} />;
      break;
    case "delete-strike":
      return <IconDeleteStrike {...restProps} />;
      break;
    case "tail":
      return <IconTail {...restProps} />;
      break;
    // 天气和自然

    //交通和位置

    //食物
  }
};

export default Icon;
