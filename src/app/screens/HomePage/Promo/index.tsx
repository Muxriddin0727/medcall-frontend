import type { FC } from "react";

const Promo: FC = () => {
  return (
    <div className="w-screen -ml-14 flex shadow-[0px -8px 90px rgb(215 215 255) overflow-hidden scale-150]">
      <video
        className="w-full"
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
        https
      </video>
    </div>
  );
};

export default Promo;
