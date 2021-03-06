import { createAction } from "redux-actions";
import moment from "moment";

export const STOP_MOUNT = "app/Handle/STOP_MOUNT";
export const SET_CUR_POST_ID = "app/Handle/SET_CUR_POST_ID";

export const stopMount = createAction(STOP_MOUNT);

const initialState = {
  isChatmount: true,
  messagePaging: (messageData: any, listSize: number) => {
    let pagingData = [];
    let onePageData = [];
    for (let i = messageData.length - 1; i >= 0; i--) {
      onePageData.push(messageData[i]);
      if (onePageData.length === listSize) {
        pagingData.push(onePageData);
        onePageData = [];
      }
    }
    if (onePageData.length !== 0) {
      pagingData.push(onePageData);
    }
    return [pagingData, pagingData.length];
  },
  pageRange: 10,
  messageRange: (messageDataLength: any) => {
    let rangeData = [];
    let oneRangeData = [];
    for (let i = 1; i < messageDataLength + 1; i++) {
      oneRangeData.push(i);
      if (oneRangeData.length === initialState.pageRange) {
        rangeData.push(oneRangeData);
        oneRangeData = [];
      }
    }
    if (oneRangeData.length !== 0) {
      rangeData.push(oneRangeData);
    }
    return rangeData;
  },
  momenter: (time: any, format: string) => {
    // foramt example : "YYYY.MM.DD HH:mm"
    return moment(new Date(time)).format(format);
  },
};

export default function Handle(state = initialState, action: any) {
  switch (action.type) {
    case STOP_MOUNT:
      return { ...state, isChatmount: false };
    default:
      return state;
  }
}
