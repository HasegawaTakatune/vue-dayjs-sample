import dayjs from 'dayjs';

import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import ja from 'dayjs/locale/ja';

dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

dayjs.extend(timezone);
dayjs.extend(utc);

dayjs.locale(ja);

export default dayjs;