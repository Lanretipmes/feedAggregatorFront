export interface SocialMediaPost {
  id: bigint;
  sourceName: string;
  date: string;
  sourceAvatarLink: string;
  postLink: string;
  description: string;
  pictures: string[];
  videos: string[];
  songs: string[];
}
