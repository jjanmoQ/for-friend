import assignments from '../constants/junior_assignment.json';
import Logo from './icons/Logo';
import * as S from './style';

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
        Welcome to SchoolLive <Logo />
      </S.Title>
      <S.GridContainer>
        {assignmentData.map((data, index) =>
          data.mime_type.includes('audio') ? (
            <S.Item key={index}>
              <audio src={data.url} controls />
            </S.Item>
          ) : (
            <S.Item key={index}>
              <video src={data.url} width={320} height={180} controls />
            </S.Item>
          )
        )}
      </S.GridContainer>
    </S.Container>
  );
}
