type Props = {
    image?: string | null;
}
export default function Avatar({image}: Props) {
    return (
        <div className='w-10 h-10 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]'>
            <img
                className='rounded-full'
                alt='user profile'
                src={image ?? undefined}
                referrerPolicy='no-referrer'
            />
        </div>
    )
}