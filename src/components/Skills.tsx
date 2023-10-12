import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Skill from './styles/skill';
import 'swiper/css';

const SkillsSection = styled.section`
    margin-top: 2rem;
`;

const CarouselWrapper = styled.div`

`;

interface ISkillData {
    url: string;
    name: string;
  }

function Carousel({data, direction}: { data: ISkillData[], direction: boolean }) {
    return (    
    <Swiper
        className='carousel'
        breakpoints={{
            320: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            560: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1440: {
                slidesPerView: 5,
                spaceBetween: 15,
            },
        }}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
            reverseDirection: direction,
            delay: 0,
            disableOnInteraction: false,
        }}
        speed={5000}
        >
          {data.map((item, index) => {
              return(
                  <SwiperSlide
                  key={index}>
                  <Skill 
                      src={item.url}
                      name={item.name}
                  />
                  </SwiperSlide>
                  );
    
              })}
        </Swiper> )

}

function GetRequestExample() {
  const [data, setData] = useState<ISkillData[] | null>(null);
  const [reversedData, setReversedData] = useState<ISkillData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://resume-backend-orcin.vercel.app/skills/');

        console.log(data)
        setData(response.data);
        setReversedData([...response.data].reverse());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [data]); 

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <SkillsSection>
      <CarouselWrapper>
        <Carousel data={data} direction={true} />
        <Carousel data={reversedData} direction={false} />
      </CarouselWrapper>
    </SkillsSection>
  );
}

export default GetRequestExample;