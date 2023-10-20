import { FC } from "react";
import { Col, Row, Statistic } from 'antd';
import { Divider } from 'antd';


const Statistics: FC = () => {
  return (
    <div className="w-[90%] m-auto  ">
      <div className="flex justify-center ">
        <Row gutter={200} >
          <Col >
            <Statistic
              title={
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img className="w-16"
                    src="/statistics/active.png"
                    alt="User Image" />
                  <span style={{ marginTop: '2px' }}></span> Active Users
                </div>}
              value={3071} />
          </Col>

          <Divider style={{ height: '60px', background: '#A8EBF8 ' }} type="vertical" />

          <Col >
            <Statistic
              title={
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img className="w-16"
                    src="/statistics/doctors.png"
                    alt="User Image" />
                  <span style={{ marginTop: '2px' }}></span> Doctors
                </div>}
              value={1123} />
          </Col>

          <Divider style={{ height: '60px', background: '#A8EBF8 ' }} type="vertical" />

          <Col >
            <Statistic
              title={
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img className="w-16"
                    src="/statistics/experience.png"
                    alt="User Image" />
                  <span style={{ marginTop: '2px' }}></span> Experienece
                </div>}
              value="8 Years" />
          </Col>

        </Row>
      </div>
    </div>
  )
};

export default Statistics;