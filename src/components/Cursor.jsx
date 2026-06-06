import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const mx = useRef(0)
  const my = useRef(0)
  const rx = useRef(0)
  const ry = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      mx.current = e.clientX
      my.current = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }

    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.14
      ry.current += (my.current - ry.current) * 0.14
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + 'px'
        ringRef.current.style.top  = ry.current + 'px'
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}
