import SkeletonLib, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function skeleton(props: SkeletonProps){
    return <SkeletonLib {...props} />
}