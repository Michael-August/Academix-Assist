export interface IMessage {
    _id: string,
    conversationId: string;
    isNew: boolean;
    to: string;
    from: string;
    message: string;
}