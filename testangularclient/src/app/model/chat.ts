import { Message } from ""./message";

export class Chat {
  rid !: string;
  users !: string[];
  messages !: Message[];
}