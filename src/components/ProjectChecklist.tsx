"use client";

import { useUser } from "@clerk/nextjs"

import Checklist, { ChecklistProps } from "@/components/Checklist"

interface ProjectChecklistProps extends ChecklistProps {
  projectSlug: string;
  initialCheckable?: boolean;
}

const ProjectChecklist = ({ projectSlug, initialCheckable, ...props }: ProjectChecklistProps) => {
  const { user } = useUser();
  return (
    <Checklist
      {...props}
      checkable={user && user?.id ? true : initialCheckable}
      // checkedItems={checkedItems}
      // onChange={onChecklistChange}
    />
  )
}

export default ProjectChecklist;