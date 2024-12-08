import Image from "next/image"
import ProfileImg from "@/assets/profile.png"

const ProfileImage = () => {
  return (
    <Image
      className="w-[300px] mask-blob"
      src={ProfileImg}
      alt="Foto de Ricardo Rodrigues"
    />
  )
}

export default ProfileImage
