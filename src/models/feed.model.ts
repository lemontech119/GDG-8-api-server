import { getRepository } from "typeorm";
import { FeedEntity } from "@entity/feed.entitiy";
import { CreateFeedDto } from "@dtos/feed.dto";
import { GetFeedList } from "@interfaces/feeds.interface";

class FeedModel {
  public feedEntity = FeedEntity;

  public async createFeed(feed: CreateFeedDto): Promise<void> {
    const feedRepository = getRepository(this.feedEntity);

    await feedRepository.save({...feed});
  }

  public async getFeedById(id: number): Promise<FeedEntity | undefined> {
    const feedRepository = getRepository(this.feedEntity);
    const ret = await feedRepository.findOne({ id });

    return ret;
  }

  public async getLatestedFeedList(): Promise<GetFeedList[]> {
    const feedRepository = getRepository(this.feedEntity);
    const ret = await feedRepository.find({
      select: ["id", "cat_id", "title", "content"],
      order: {
        createdAt: "DESC",
      },
      take: 20,
    })

    return ret;
  }

  public async getFeedListByCatId(cat_id: number): Promise<GetFeedList[]> {
    const feedRepository = getRepository(this.feedEntity);
    const ret = await feedRepository.find({
      select: ["id", "cat_id", "title", "content"],
      where: {
        cat_id,
      },
      order: {
        createdAt: "DESC",
      },
      take: 5,
    })

    return ret;
  }

}

export default FeedModel;