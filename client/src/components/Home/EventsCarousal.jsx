import Carousal from "antd";

const carouselProperties = {
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
};
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const EventsCarousal = ({ content }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousal {...carouselProperties} afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousal>
  );
};

export default EventsCarousal;
