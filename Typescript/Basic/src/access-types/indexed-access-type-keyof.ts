import { logProps } from "../utils";

interface UserProfile {
  name: string;
  hasPremiumAccess: boolean;
  premiumPointsEarned: number;
}

class Repository<T> {
  constructor(private entities: T[]){}

  filterByKey<K extends keyof T>(filterKey: K, filterValue: T[K]): T[] {
    return this.entities.filter(entity => entity[filterKey] === filterValue)
  }

  filterByEntity(fn: (entity: T) => boolean): T[] {
    return this.entities.filter(fn);
  }
}

const run = (): void => {
  const profiles: UserProfile[] = [
    {
      name: "Nicholas",
      hasPremiumAccess: false,
      premiumPointsEarned: 20
    },
    {
      name: "Andreja",
      hasPremiumAccess: true,
      premiumPointsEarned: 100
    },
    {
      name: "Spartacus",
      hasPremiumAccess: true,
      premiumPointsEarned: 58
    }
  ]
  const repo = new Repository<UserProfile>(profiles);

  const premiumProfiles = repo.filterByKey("hasPremiumAccess", true);
  premiumProfiles.forEach(userProfile => logProps(userProfile));

  const profilesBelowFifty = repo.filterByEntity(entity => entity.premiumPointsEarned < 50);
  profilesBelowFifty.forEach(userProfile => logProps(userProfile));
}

export default run;