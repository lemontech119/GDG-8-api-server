import FeedModel from "@/models/feed.model";
import CatModel from "@models/cat.model";
import { CreateFeedDto } from "@dtos/feed.dto";
import { FeedDto } from "@dtos/feed.get.dto";


class CatService
{
    public catModel = new CatModel();
    public feedModel = new FeedModel();

    public async findCatInfo() {

        const cats = await this.catModel.getCats();
        const feeds = await this.feedModel.getLatestedFeedList();
        
        const unique = [...new Set(feeds.map(item => item.cat_id))];
        const cat_unique = await this.catModel.getCatsSpecific(unique);

        var res = feeds.map(function(elem, idx) {

            let result: any = {};

            result['cat_id'] = elem.cat_id;
            result['id'] = elem.id;
            result['title'] = elem.title;
            result['content'] = elem.content;
            
            const re = cats.find((val) => {
                if (val.id == elem.cat_id)
                    return true;
            });
            result['image_url'] = re.image_url;

            return result;
        })

        return res;
    }

/*
    public async findTestById(testId: number): Promise<Test> {
        if (isEmpty(testId)) throw new HttpException(400, "You're not testId");
        const findTest = await this.indexModel.findTestById(testId);
        
        if (!findTest) {
          throw new HttpException(409, "It's data that doesn't");
        }
        return findTest;
      }
*/

}

export default CatService;