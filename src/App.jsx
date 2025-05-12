import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
  {
    userName: 'FRANCISCO',
    name: 'FRANCISCO',
    isFollowing: true,
  },
  {
    userName: 'PACO',
    name: 'PACO',
    isFollowing: false,
  },
  {
    userName: 'PABLO',
    name: 'PABLO',
    isFollowing: true,
  },
  {
    userName: 'TOMAS',
    name: 'TOMAS',
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
