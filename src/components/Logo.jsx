import Image from 'next/image'
export function Logo(props) {
  return (
    <div className="flex items-center">
      <Image
        src="https://site.ieee.org/sb-ritb/files/2018/05/cropped-transparent-bg.png"
        alt="IEEE Computational Intelligence Society"
        width={82}
        height={70}
      />
    </div>
  )
}
