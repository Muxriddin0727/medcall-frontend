import { FC } from "react";
import { Card, Col, Row } from 'antd';


  
  

const TopBlogs: FC = () => {
    return (
        <div className="m-20">
            <div className="w-[90%] m-auto ">
                <Row gutter={16}>
                
                    <Col span={8} >
                        <Card 
                        title= "Corona Virus"
                        bordered={false}
                        >
                       <span> In the last century, different regions of the world have experienced viral outbreaks caused by human pathogenic coronaviruses (CoVs) that have resulted in epidemics and pandemics.  More recently, the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) caused the ongoing coronavirus disease 2019 (COVID-19) pandemic. </span>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Healthy Life" bordered={false}>
                        Consuming a healthy diet throughout the life-course helps to prevent malnutrition in all its forms as well as a range of noncommunicable diseases (NCDs) and conditions. However, increased production of processed foods, rapid urbanization and changing lifestyles have led to a shift in dietary patterns.
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Mental Health" bordered={false}>
                        In the psychiatric community, borderline personality disorder (BPD) and dialectical behavior therapy (DBT) tend to be spoken in the same breath. Diagnosed with BPD? Then you need to enter DBT treatment. I was one of those individuals for whom DBT was the first-line treatment when I was diagnosed with BPD in 1990, following my second suicide attempt. 
                        </Card>
                    </Col>
            
                </Row>
            </div>
        </div>
    )
};

export default TopBlogs;