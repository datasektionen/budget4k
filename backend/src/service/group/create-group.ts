import { GroupRepository } from "../../data/repository";
import { INewGroup } from "src/types";

export class CreateGroupService {
    private groupRepo = new GroupRepository();

    public async create(data: INewGroup) {
        if (await this.groupRepo.findById(data.groupId)) {
            return;
        }

        return await this.groupRepo.create(data);
    }
}
