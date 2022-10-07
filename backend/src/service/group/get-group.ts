import { GroupRepository } from "../../data/repository";

export class GetGroupService {
    private groupRepo = new GroupRepository();

    public async getMany() {
        return await this.groupRepo.findAll();
    }

    public async getById(groupId: string) {
        return await this.groupRepo.findById(groupId);
    }
}
