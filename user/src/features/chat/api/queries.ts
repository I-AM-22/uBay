import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation, useQuery } from "@tanstack/react-query";
import API from "./api";

export const keys = createQueryKeys("chat", {
  all: () => ({
    queryFn: () => API.getAll(),
    queryKey: [""],
  }),
  detail: (id: string) => ({
    queryFn: () => API.get(id),
    queryKey: [id],
  }),
  messages: (chatId: string) => ({
    queryFn: () => API.getMessages(chatId),
    queryKey: [chatId],
  }),
});
export const queries = {
  useChats: (isBuy: boolean, myId: string) =>
    useQuery({
      ...keys.all(),
      select: (data) =>
        data.filter(
          (item) => (isBuy && item.customer._id === myId) || (!isBuy && item.seller._id === myId)
        ),
    }),
  useMessages: (chatId: string) => useQuery(keys.messages(chatId)),
  useDetails: (id: string) => useQuery(keys.detail(id)),
  usePost: () => useMutation(API.post),
  usePostMessage: () => useMutation(API.postMessage),
};
