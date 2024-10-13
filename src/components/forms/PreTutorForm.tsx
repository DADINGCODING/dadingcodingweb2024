import React, { useState } from 'react';
import styled from 'styled-components';

const TimeSlotSelector: React.FC<{ selectedSlots: any[], setSelectedSlots: (slots: any[]) => void }> = ({
    selectedSlots,
    setSelectedSlots,
  }) => {
    const days = ['월', '화', '수', '목', '금', '토', '일'];
    const times = Array.from({ length: 24 }, (_, i) => `${i}:00`);
    
    const handleSlotClick = (dayIndex: number, timeIndex: number) => {
      const slot = `${days[dayIndex]} ${times[timeIndex]}`;
      if (selectedSlots.includes(slot)) {
        setSelectedSlots(selectedSlots.filter((s) => s !== slot));
      } else {
        setSelectedSlots([...selectedSlots, slot]);
      }
    };
    
  
    return (
      <TimeSlotContainer>
        <div>
          <TimeSlotHeader>
            <div>시간</div>
            {days.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </TimeSlotHeader>
          <TimeSlotBody>
            {times.map((time, timeIndex) => (
              <TimeSlotRow key={time}>
                <div>{time}</div>
                {days.map((_, dayIndex) => (
                  <TimeSlotCell
                    key={`${dayIndex}-${timeIndex}`}
                    selected={selectedSlots.includes(`${days[dayIndex]} ${times[timeIndex]}`)}
                    onClick={() => handleSlotClick(dayIndex, timeIndex)}
                  />
                ))}
              </TimeSlotRow>
            ))}
          </TimeSlotBody>
        </div>
      </TimeSlotContainer>
    );
  };

  const InterviewTimePrompt: React.FC<{ selectedSlots: any[], setSelectedSlots: (slots: any[]) => void }> = ({
    selectedSlots,
    setSelectedSlots,
  }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
  
    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value === 'when2meet') {
        setDropdownVisible(true);
      } else {
        setDropdownVisible(false);
      }
    };
  
    return (
      <div>
        <StyledSelect onChange={handleDropdownChange}>
          <StyledOption value="">방식 선택</StyledOption>
          <StyledOption value="when2meet">when2meet</StyledOption>
        </StyledSelect>
        {dropdownVisible && (
          <TimeSlotSelector selectedSlots={selectedSlots} setSelectedSlots={setSelectedSlots} />
        )}
      </div>
    );
  };

const PythonLevelToggle: React.FC<{ pythonLevel: number; setPythonLevel: (level: number) => void }> = ({
    pythonLevel,
    setPythonLevel,
  }) => {
    const handleToggle = (level: number) => {
      setPythonLevel(level);
    };
  
    return (
      <ToggleContainer>
        {[1, 2, 3, 4, 5].map((level) => (
          <ToggleButton
            key={level}
            isSelected={pythonLevel === level}
            onClick={() => handleToggle(level)}
          >
            {level}
          </ToggleButton>
        ))}
      </ToggleContainer>
    );
};

const PreTutorForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    agreement: false,
    seoulDonghaengImage: '',
    school: '',
    studentId: '',
    residence: '',
    age: '',
    pythonLevel: 1,
    motivation: '',
    projectExperience: '',
    interviewTime: Array(7).fill(null).map(() => Array(12).fill(false)) as boolean[][],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, seoulDonghaengImage: file.name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <FormBackground>
        <BackgroundText>DADING CODING</BackgroundText>
      <FormBox>
        <Title>JOIN US (PRE-TUTOR)</Title>
        <FormTable>
          <tbody>
            <TableRow>
              <TableCell>지원서</TableCell>
              <TableCell />
            </TableRow>
            <TableRow>
              <TableCell>개인정보동의</TableCell>
              <TableCell>
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>서울동행 인증</TableCell>
              <TableCell>
                <FileInputWrapper>
                <input type="file" name="seoulDonghaengImage" onChange={handleImageUpload} />
                <label htmlFor="seoulDonghaengImage">이미지 파일 선택</label>
                </FileInputWrapper>
                {formData.seoulDonghaengImage && (
                <>
                    <FileNameDisplay>{formData.seoulDonghaengImage}</FileNameDisplay>
                    <DeleteButton onClick={() => setFormData((prev) => ({ ...prev, seoulDonghaengImage: '' }))}>
                        삭제
                    </DeleteButton>
                </>
                )}
            </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>학교 학번 나이 거주지(도)</TableCell>
              <TableCell>
                <InputWrapper>
                  <input
                    type="text"
                    name="school"
                    placeholder="학교"
                    value={formData.school}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="studentId"
                    placeholder="학번"
                    value={formData.studentId}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="age"
                    placeholder="나이"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="residence"
                    placeholder="거주지(도)"
                    value={formData.residence}
                    onChange={handleInputChange}
                  />
                </InputWrapper>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>파이썬 이해도</TableCell>
              <TableCell>
                <PythonLevelToggle
                    pythonLevel={formData.pythonLevel}
                    setPythonLevel={(level: number) => setFormData((prev) => ({ ...prev, pythonLevel: level }))}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>지원동기</TableCell>
              <TableCell>
                <TextAreaWrapper>
                    <textarea
                    name="motivation"
                    placeholder="지원동기"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    />
                </TextAreaWrapper>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>프로젝트 경험</TableCell>
              <TableCell>
                <TextAreaWrapper>
                    <textarea
                    name="projectExperience"
                    placeholder="프로젝트 경험"
                    value={formData.projectExperience}
                    onChange={handleInputChange}
                    />
                </TextAreaWrapper>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>면접 가능 시간대</TableCell>
              <TableCell>
                <InterviewTimePrompt
                    selectedSlots={formData.interviewTime}
                    setSelectedSlots={(slots: any[]) => setFormData((prev) => ({ ...prev, interviewTime: slots }))}
                />
                </TableCell>
            </TableRow>
            <LastTableRow>
              <TableCell colSpan={2}>
                <ButtonContainer>
                  <ActionButton type="button">수정하기</ActionButton>
                  <ActionButton type="button">임시저장</ActionButton>
                  <ActionButton type="submit" onClick={handleSubmit}>
                    제출하기
                  </ActionButton>
                </ButtonContainer>
              </TableCell>
            </LastTableRow>
          </tbody>
        </FormTable>
      </FormBox>
    </FormBackground>
  );
};


const FormBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: black;
  position: relative;
  overflow: hidden;
`;

const BackgroundText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 200px;
  font-family: 'Couture', sans-serif;
  font-weight: 700;
  color: rgba(185, 255, 130, 0.30);
  white-space: nowrap;
  line-height: 1.2;
  transform: rotate(-21.64deg);
  pointer-events: none;
  user-select: none;
  
  &::after {
    content: 'DADING CODING';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-21.64deg);
  }
`;

const FormBox = styled.div`
  width: 800px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 2em;
  color: #b9ff82;
  text-align: center;
  margin-bottom: 10px;
`;

const FormTable = styled.table`
  width: 90%;
  max-width: 1600px;
  border-collapse: collapse;
  background-color: transparent;
  margin-bottom: 1px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
const LastTableRow = styled(TableRow)`
  border-bottom: none;
`;

const TableCell = styled.td`
  padding: 15px;
  color: #fff;
  font-size: 0.7em;
  width: 40%;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 0.5px;

  input, textarea {
    width: 100%;
    padding: 10px;
    font-size: 0.7em;
    background: rgba(255, 255, 255, 0.1);
    border: 0.1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: white;
    outline: none;
    transition: background-color 0.3s ease, border 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }

    &:focus {
      background-color: rgba(255, 255, 255, 0.2);
      border-color: #B9FF82;
      box-shadow: 0 0 10px rgba(185, 255, 130, 0.5);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  & > *:not(:last-child) {
    position: relative;
    margin-right: 5px;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -10px;
      width: 1px;
      height: 100%;
      background-color: white;
    }
  }
`;

const ActionButton = styled.button`
  width: 15%;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    color: #b9ff82;
    font-weight: bold;
  }
  font-size: 1.6em;
`;

const ToggleContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const ToggleButton = styled.button<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? 'rgba(185, 255, 130, 0.9)' : 'rgba(51, 51, 51, 0.5)')};
  color: ${(props) => (props.isSelected ? '#fff' : '#fff')};
  border: 1px #b9ff82;
  border-radius: 10px;
  padding: 8px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  &:hover {
    background-color: #b9ff82;
    color: white;
  }
`;

const TextAreaWrapper = styled.div`
  position: relative;
  margin-bottom: 0.3px;
  width: 91%;

  textarea {
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border: 0.1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 15px;
    color: white;
    font-size: 1em;
    outline: none;
    resize: none;
    transition: background-color 0.3s ease, border 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }

    &:focus {
      background-color: rgba(255, 255, 255, 0.2);
      border-color: #b9ff82;
      box-shadow: 0 0 10px rgba(185, 255, 130, 0.5);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9em;
    }
  }

  label {
    position: absolute;
    top: -10px;
    left: 15px;
    background: rgba(0, 0, 0, 0.7);
    padding: 0 5px;
    font-size: 0.85em;
    color: #b9ff82;
  }
`;


const TimeSlotContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimeSlotHeader = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    flex: 1;
    text-align: center;
    font-weight: bold;
    color: white;
  }
`;

const TimeSlotBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimeSlotRow = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    flex: 1;
    text-align: center;
    color: white;
    border: 0.1px solid rgba(255, 255, 255, 0.1);
  }
`;

const TimeSlotCell = styled.div<{ selected: boolean }>`
  width: 100%;
  height: 20px;
  background-color: ${(props) => (props.selected ? '#b9ff82' : 'rgba(255, 255, 255, 0.2)')};
  border: 1px solid #fff;
  cursor: pointer;
  &:hover {
    background-color: #b9ff82;
  }
`;

const StyledSelect = styled.select`
  width: 102%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  border: 0.1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 0.8em;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: #b9ff82;
    box-shadow: 0 0 10px rgba(185, 255, 130, 0.5);
  }
`;

const StyledOption = styled.option`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
`;

const FileInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 0.1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  &:focus-within {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: #b9ff82;
    box-shadow: 0 0 10px rgba(185, 255, 130, 0.5);
  }

  input[type="file"] {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  label {
    font-size: 0.9em;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const FileNameDisplay = styled.div`
  font-size: 0.8em;
  color: white;
  margin-top: 10px;
  text-align: center;
  word-wrap: break-word;
`;

const DeleteButton = styled.button`
  margin-right: 1px;
  padding: 2px 4px;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 0.6em;

  &:hover {
    background-color: rgba(255, 10, 10, 0.6);
  }
`;
export default PreTutorForm;
