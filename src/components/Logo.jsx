import Image from 'next/image'
export function Logo(props) {
  return (
    <div className="flex items-center">
      <Image
        src="https://avatars.githubusercontent.com/u/133042598?s=200&v=4"
        alt="IEEE Computational Intelligence Society"
        width={100}
        height={100}
      />
    </div>
  )
}
