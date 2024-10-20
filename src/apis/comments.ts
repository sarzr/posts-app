import {
  IFetchCommentsReqDto,
  IFetchCommentsResDto,
} from "../types/comments.type";
import { httpClient } from "./client";
import { urls } from "./urls";

type getCommentsListType = (
  _: IFetchCommentsReqDto
) => Promise<IFetchCommentsResDto>;
export const getCommentsList: getCommentsListType = async ({
  postId,
  ...params
}) => {
  const client = httpClient();
  const response = await client.get<IFetchCommentsResDto>(
    urls.comments.byPostId(postId),
    {
      params: { limit: params.limit, skip: params.skip },
    }
  );
  return response.data;
};
