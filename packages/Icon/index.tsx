import { CommonProps } from "packages/types";

import {
  IconApplication,
  IconHome,
  IconMore,
  IconMoreLine,
  IconRefresh,
} from "./Nav";
import {
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
import { IconLayer } from "./Style";
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
    case "refresh":
      return <IconRefresh {...restProps} />;
      break;
    //社交媒体

    // 用户界面
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
    case "slipt-cells":
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

    // 天气和自然

    //交通和位置

    //食物
  }
};

export default Icon;
