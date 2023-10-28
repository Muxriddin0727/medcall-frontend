import { BlogCardType } from "../types/blogs";
import { IntroItemType } from "../types/others";

const intro_data: IntroItemType[] = [
  {
    id: 0,
    title: "CONNECT, CONSULT, PRIORITIZE YOUR",
    description:
      " MedCall is committed to redefining healthcare, putting you at the       forefront of your health journey. Take advantage of this seamless,     secure, and comprehensive online healthcare solution for a healthier      and more accessible future. Your well-being is our priority, nd we're     here to support you every step of the way.",
    buttonText: "EXPLORE NOW",
    src: "/doctors/smile.png",
  },

  {
    id: 1,
    title: "CHOICES TODAY SHAPE TOMORROW'S",
    description:
    "Choose MedCalL Online Consulting Platform for a healthier, more  convenient way to manage your health and well-being. Embrace the   future of healthcare today and make every day a step towards a   healthier, happier life",
    buttonText: "EXPLORE NOW",
    src: "/icons/bag.png",
  },

  {
    id: 2,
    title: "ONLINE HEALING FOR LASTING HEALTH",
    description:

    " MedCall is your trusted destination for accessible, convenient, and    expert medical advice and care. We bring the expertise of healthcare    professionals to your fingertips, offering a comprehensive suite of   telemedicine services tailored to your needs.",
    buttonText: "EXPLORE NOW",
    src: "/icons/korsatma.png",
  },
];

const blog_data: BlogCardType[]=[
  {
    title: "Unlocking the Key to Health: Quality Sleep",
    id:0,
    content:"In today's fast-paced world, it's easy to overlook the importance of a good night's sleep. But quality sleep is a cornerstone of good health. During sleep, your body performs vital functions that contribute to your overall well-being. It's not just about feeling rested the next day; it's about ensuring your body has the opportunity to repair and restore itself.Quality sleep is linked to numerous health benefits, including:Physical Health: Adequate sleep supports your body s ability to repair and regenerate tissues, maintain a healthy immune system, and regulate hormones that control appetite and stress.Mental Health: A restful night's sleep can improve your mood, enhance cognitive function, and help manage stress and anxiety.Chronic Disease Prevention: Consistent, high-quality sleep is associated with a reduced risk of chronic conditions such as heart disease, diabetes, and obesity. To improve your sleep quality, consider implementing the following tips:Stick to a regular sleep schedule.Create a comfortable sleep environment.    Limit screen time before bed.   Manage stress and anxiety through relaxation techniques.  By prioritizing quality sleep, you can unlock the key to better health and a more vibrant life.",
    short_description:"In today's fast-paced world, quality sleep often takes a backseat. Yet, it's one of the most critical elements for overall health and well-being. Discover the science behind a good night's sleep and the positive impact it can have on your physical and mental health. Learn practical tips for improving your sleep and reaping the benefits of better health." ,
    created_by:"Mike",
    views:21,
    reaction_length:21
  }
];
 export {blog_data};
export { intro_data };
