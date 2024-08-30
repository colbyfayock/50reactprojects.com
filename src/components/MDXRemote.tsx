"use client";

import { MDXRemote as DefaultMDXRemote, MDXRemoteProps } from 'next-mdx-remote';

import Checklist from '@/components/Checklist';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectContent from '@/components/ProjectContent';
import LoginRequired from '@/components/LoginRequired';
import ProjectSidebar from '@/components/ProjectSidebar';

const MDXRemote = (props: MDXRemoteProps) => {
  return (
    <DefaultMDXRemote {...props} components={{
      ProjectHeader,
      ProjectContent,
      LoginRequired,
      ProjectSidebar,
      Checklist: (props) => {
        return (
          <Checklist
            {...props}
            // checkable={!!session}
            // checkedItems={checkedItems}
            // onChange={onChecklistChange}
          />
        );
      },
    }} />
  );
}

export default MDXRemote;