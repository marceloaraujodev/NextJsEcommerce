import { useState } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const MainImage = styled.img`
  max-width: 100%;
  max-height: 200px;
`;

const MainImgWrapper = styled.div`
  text-align: center;
`;

const ImgBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`;

const ImgBtn = styled.div`
  border: 2px solid #ccc;
  ${props => props.active ? 
    `border-color: #ccc;` : 
    `border-color: transparent;
    opacity: 0.7;
  `}
  height: 55px;
  padding: 2px;
  cursor: pointer;
  border-radius: 4px;
`;

export default function ProductImgGallery({ images }) {
  const [activeImg, setActiveImg] = useState(images?.[0]);

  return (
    <>
      <MainImgWrapper>
        <MainImage src={activeImg} alt="" />
      </MainImgWrapper>
      <ImgBtns>
        {images.map((image) => (
          <ImgBtn key={image} active={image === activeImg} onClick={() => setActiveImg(image)}>
            <Image src={image} alt="" />
          </ImgBtn>
        ))}
      </ImgBtns>
    </>
  );
}
