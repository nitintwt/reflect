import { Message} from '../model/User.model'

// ? , makes the field optional
export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptingMessages?: boolean;
  messages?: Array<Message>
};