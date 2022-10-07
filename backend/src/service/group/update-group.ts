import { GroupRepository } from "../../data/repository";
import { IUpdateGroup } from "src/types";

export class UpdateGroupService {
    private groupRepo = new GroupRepository();

    public async update(groupId: string, data: IUpdateGroup) {
        return await this.groupRepo.update(data, { groupId });
    }
}
