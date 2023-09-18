import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound(); // navigate to the general not found page if not-found page isn't define in this folder

  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
