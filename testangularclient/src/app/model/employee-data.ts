import { ChatParticipant } from "./chat-participant";
import { Employee } from "./employee";
import { Message } from "./message";

export class EmployeeData {
	
	employee !: Employee;
	partners !: ChatParticipant[];
	messages !: Message[];
	chats !: String[];
}
