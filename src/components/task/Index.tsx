import React from 'react'
import DescriptionList from './DescriptionList';
import ProfileHeader from './ProfileHeader';
import Tabs from './Tabs';
import TeamMemberList from './TeamMemberList';

const TaskBody = () => {
  return (
    <article>
      <ProfileHeader />

      <Tabs />

      {/* Description list */}
      <DescriptionList />

      {/* Team member list */}
      <TeamMemberList />
    </article>
  );
};

export default TaskBody;