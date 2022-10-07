import { GroupRepository } from "../../data/repository";

export class DeleteGroupService {
    private groupRepo = new GroupRepository();

    public async delete(groupId: string) {
        return await this.groupRepo.delete({ groupId });
    }
}
