import { Variants } from 'framer-motion';

export interface AnimationImageConfig {
  iconId: number | string;
  iconName: string;
  position: string;
  animation: Variants;
}

export interface TabContent {
  _id: number;
  tabTitle: string;
  contentTitle: string;
  textContent: string;
  menuIcon: string;
  phoneImg: string;
  animationImages?: AnimationImageConfig[];
}

import AdvFiltersPhone from '../assets/img/advanced-filters/phone.svg';
import AdvFiltersRangeLeft from '../assets/img/advanced-filters/range-left.svg';
import AdvFiltersRangeRight from '../assets/img/advanced-filters/range-right.svg';
import BatchScanBack from '../assets/img/batch-scanning/back.svg';
import BatchScanFront from '../assets/img/batch-scanning/front.svg';
import BatchScanMiddle from '../assets/img/batch-scanning/middle.svg';
import BatchScanPhone from '../assets/img/batch-scanning/phone.svg';
import DocScanPhone from '../assets/img/document-scanner/phone.svg';
import ExportShareJpg from '../assets/img/export-and-share/jpg-icon.svg';
import ExportSharePdf from '../assets/img/export-and-share/pdf-icon.svg';
import ExportSharePhone from '../assets/img/export-and-share/phone.svg';
import ExportShareShare from '../assets/img/export-and-share/share-icon.svg';
import ExportShareTxt from '../assets/img/export-and-share/txt-icon.svg';
import MenuIconAdvFilters from '../assets/img/menu-icons/menu-icon-advanced-filters.svg';
import MenuIconBatchScan from '../assets/img/menu-icons/menu-icon-batch-scanning.svg';
import MenuIconDocScan from '../assets/img/menu-icons/menu-icon-document-scanner.svg';
import MenuIconExportShare from '../assets/img/menu-icons/menu-icon-export-and-share.svg';
import MenuIconSignStamp from '../assets/img/menu-icons/menu-icon-sign-and-stamp.svg';
import SignStampPhone from '../assets/img/sign-and-stamp/phone.svg';
import SignStampSign from '../assets/img/sign-and-stamp/sign.svg';
import SignStampStamp from '../assets/img/sign-and-stamp/stamp.svg';
import { fadeInOut, slideUp } from '../utils/animations';

export const tabContent: TabContent[] = [
  {
    _id: 1,
    tabTitle: 'Document Scanner',
    contentTitle: 'Scan with Ease',
    textContent:
      'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
    menuIcon: MenuIconDocScan,
    phoneImg: DocScanPhone,
  },
  {
    _id: 2,
    tabTitle: 'Sign & Stamp',
    contentTitle: 'One-Tap Focus',
    textContent:
      'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
    menuIcon: MenuIconSignStamp,
    phoneImg: SignStampPhone,
    animationImages: [
      {
        iconId: 1,
        iconName: SignStampSign,
        position: 'left-[-15%] bottom-[20%] w-[141px] lg:w-[217px]',
        animation: {
          ...fadeInOut,
          animate: {
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          },
        },
      },
      {
        iconId: 2,
        iconName: SignStampStamp,
        position: 'right-[-15%] top-[30%] w-[141px] lg:w-[217px]',
        animation: {
          ...fadeInOut,
          animate: {
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.7,
            },
          },
        },
      },
    ],
  },
  {
    _id: 3,
    tabTitle: 'Batch Scanning',
    contentTitle: 'Multiple Page Scan',
    textContent:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    menuIcon: MenuIconBatchScan,
    phoneImg: BatchScanPhone,
    animationImages: [
      {
        iconId: 1,
        iconName: BatchScanBack,
        position: 'top-[22%] left-[20%] h-[65%]',
        animation: {
          ...slideUp,
          animate: {
            translateY: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.3,
            },
          },
        },
      },
      {
        iconId: 2,
        iconName: BatchScanMiddle,
        position: 'top-[25%] left-[10%] h-[75%]',
        animation: {
          ...slideUp,
          animate: {
            translateY: 0,

            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          },
        },
      },
      {
        iconId: 3,
        iconName: BatchScanFront,
        position: ' top-[15.5%] lg:top-[24%] left-[5%] h-[80%]  ',
        animation: {
          ...slideUp,
          animate: {
            translateY: 50,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.7,
            },
          },
        },
      },
    ],
  },
  {
    _id: 4,
    tabTitle: 'Advanced Filters',
    contentTitle: 'Unique Filters',
    textContent:
      'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
    menuIcon: MenuIconAdvFilters,
    phoneImg: AdvFiltersPhone,
    animationImages: [
      {
        iconId: 1,
        iconName: AdvFiltersRangeLeft,
        position: 'left-[-6%] top-[22%]  h-[220px] lg:h-[360px]',
        animation: {
          ...fadeInOut,
          animate: {
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          },
        },
      },
      {
        iconId: 2,
        iconName: AdvFiltersRangeRight,
        position: 'right-[-8%] top-[22%]  h-[220px] lg:h-[360px]',
        animation: {
          ...fadeInOut,
          animate: {
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          },
        },
      },
    ],
  },
  {
    _id: 5,
    tabTitle: 'Export & Share',
    contentTitle: 'All-Round Conversion',
    textContent: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
    menuIcon: MenuIconExportShare,
    phoneImg: ExportSharePhone,
    animationImages: [
      {
        iconId: 1,
        iconName: ExportShareShare,
        position: 'bottom-[5%] left-[-10%] w-[15px] lg:w-[35px]',
        animation: {
          ...slideUp,
          initial: { translateX: 100, translateY: 400, opacity: 1 },
          animate: {
            translateY: 0,
            translateX: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.3,
            },
          },
        },
      },
      {
        iconId: 2,
        iconName: ExportSharePdf,
        position:
          'bottom-[5%] left-[-5%] lg:bottom-[8%] lg:left-[-5%] w-[85px] lg:w-[150px]',
        animation: {
          ...slideUp,
          initial: { translateX: 100, translateY: 400, opacity: 1 },
          animate: {
            translateY: 0,
            translateX: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          },
        },
      },
      {
        iconId: 3,
        iconName: ExportShareJpg,
        position:
          'bottom-[10%] left-[28%] lg:bottom-[12%] lg:left-[30%]  w-[85px] lg:w-[150px] ',
        animation: {
          ...slideUp,
          initial: { translateX: 0, translateY: 400, opacity: 1 },
          animate: {
            translateY: 0,
            translateX: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.7,
            },
          },
        },
      },
      {
        iconId: 4,
        iconName: ExportShareTxt,
        position:
          'bottom-[22%] lg:bottom-[18%] right-[40%] lg:right-[19%] w-[85px] lg:w-[150px]  ',
        animation: {
          ...slideUp,
          initial: { translateY: 400, opacity: 1 },
          animate: {
            translateY: 50,
            translateX: 100,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.9,
            },
          },
        },
      },
    ],
  },
];
