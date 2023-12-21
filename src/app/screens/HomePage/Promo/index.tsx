import type { FC } from "react";

const Promo: FC = () => {
  return (
    <div className="w-full  lg:-ml-14 sm:-ml-0 flex shadow-[0px -8px 90px rgb(215 215 255) overflow-hidden]">
      <video
        className="flex scale-x-150 h-full"
        autoPlay={true}

        loop
        muted
        playsInline
        data-video-media=""
      >
        <source
          type="video/mp4"
          src="https://storage.googleapis.com/muxriddin/_import_609d89acd35b49.00279959%20(1).mp4"
        />
      </video>
    </div>
  );
};

export default Promo;