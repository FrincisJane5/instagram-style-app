import { User } from '../types/user';

export const users: User[] = [
  {
    id: "user1",
    username: "janedoe",
    email: "jane@example.com",
    fullName: "Jane Doe",
    bio: "Photographer | Traveler | Coffee lover ✨",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    followers: 1243,
    following: 567,
    posts: 42
  },
  {
    id: "user2",
    username: "traveler",
    email: "traveler@example.com",
    fullName: "Alex Traveler",
    bio: "Exploring the world one city at a time 🌎",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    followers: 3521,
    following: 235,
    posts: 127
  },
  {
    id: "user3",
    username: "foodie_adventures",
    email: "foodie@example.com",
    fullName: "Sam Foodie",
    bio: "Food blogger | Recipe creator | Always hungry 🍕",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    followers: 8765,
    following: 412,
    posts: 342
  },
  {
    id: "user4",
    username: "fitness_guru",
    email: "fitness@example.com",
    fullName: "Chris Fit",
    bio: "Personal trainer | Nutrition specialist | Motivator 💪",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    followers: 5432,
    following: 321,
    posts: 98
  },
  {
    id: "user5",
    username: "plant_lover",
    email: "plants@example.com",
    fullName: "Taylor Green",
    bio: "Plant parent | Urban gardener | Sustainability advocate 🌿",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    followers: 2134,
    following: 567,
    posts: 76
  }
];