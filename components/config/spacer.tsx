import { useWindowSize } from '@/hooks/useWindowSize'

interface Props {
  pcSize?: number
  spSize?: number
  horizontal?: boolean;
}

export function Spacer(props: Props) {
  const width = useWindowSize()
  let size = 0

  if( width < 768 ) {
    size = props.spSize! / 375 * 100
  }else{
    size = props.pcSize! / 1600 * 100
  }

  return (
    <>
      <div
      style={
        props.horizontal
          ? { width: 0, height: 'auto', display: 'inline-block', flexShrink: 0, marginLeft:  size +'vw' }
          : { width: 'auto', height: 0, flexShrink: 0, marginBottom:  size +'vw' }}>
      </div>
    </>
  )
}