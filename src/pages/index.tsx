import assignments from '@/constants/junior_assignment.json';
import * as S from '@/styles/Home.style';
import Image from 'next/image';

interface AssignmentData {
  url: string;
  mime_type: string;
}

export default function Home() {
  const assignmentData: AssignmentData[] = assignments.map((assignment) => ({
    ...assignment.data,
  }));

  return (
    <S.Container>
      <S.Title>
        <div className="allen">
          Hello Allen Family 💕
          <Image src={'/allen.png'} width={50} height={50} alt="allen" />
        </div>
        <div className="schoollive">Welcome to SchoolLive!!</div>
      </S.Title>
      <S.GridContainer>
        {assignmentData.map((data, index) =>
          data.mime_type.includes('audio') ? (
            <S.Item key={index}>
              <audio src={data.url} controls />
            </S.Item>
          ) : (
            <S.Item key={index}>
              <video src={data.url} width={480} height={300} controls />
            </S.Item>
          )
        )}
      </S.GridContainer>
    </S.Container>
  );
}
