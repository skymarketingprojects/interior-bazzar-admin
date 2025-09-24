import { MESSAGES, type MessageLang } from "../constants/messages";
const currentLang: MessageLang = "en";
type categoryType = keyof (typeof MESSAGES)["en"];
export const getMessage = (type: categoryType): any => {
  const messge = MESSAGES[currentLang][type];
  return messge;
};
