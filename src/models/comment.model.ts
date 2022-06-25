import { getRepository } from "typeorm";
import { CommentEntity } from "@entity/comment.entity";
import { CreateCommentDto } from "@dtos/comment.dto";

class CommentModel {
  public comment = CommentEntity;

  public async listByFeedId(feed_id: number): Promise<CommentEntity[]> {
    const commentRepository = getRepository(this.comment);
    return await commentRepository.find({ 
      where: {
        feed_id 
      },
      order: {
        createdAt: "DESC",
      }
    });
  }

  public async create(comment: CreateCommentDto): Promise<void> {
    const commentRepository = getRepository(this.comment);
    await commentRepository.save({ ...comment });
  }
}

export default CommentModel;
