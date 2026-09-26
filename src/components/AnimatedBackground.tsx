import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  purple: boolean;
};

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frame = 0;
    let lastTime = 0;
    let pointer: { x: number; y: number } | null = null;

    const draw = (delta: number) => {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;

        if (pointer && !motionPreference.matches) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance > 0 && distance < 130) {
            const force = (1 - distance / 130) * delta * 5;
            particle.x += (dx / distance) * force;
            particle.y += (dy / distance) * force;
          }
        }

        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;
      }

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (distance >= 145) continue;
          context.strokeStyle = `rgba(62, 155, 207, ${(1 - distance / 145) * 0.13})`;
          context.lineWidth = 0.6;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
        context.fillStyle = particle.purple ? 'rgba(155, 135, 235, 0.35)' : 'rgba(74, 192, 226, 0.42)';
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(width < 768 ? 26 : 65, Math.ceil((width * height) / 19000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 9,
        vy: (Math.random() - 0.5) * 9,
        radius: Math.random() * 1.2 + 0.6,
        purple: Math.random() < 0.12,
      }));
      draw(0);
    };

    const animate = (time: number) => {
      // Limit drawing to 30 fps and prevent jumps after switching tabs.
      if (time - lastTime >= 1000 / 30) {
        draw(lastTime ? Math.min((time - lastTime) / 1000, 0.06) : 0);
        lastTime = time;
      }
      frame = window.requestAnimationFrame(animate);
    };

    const syncAnimation = () => {
      window.cancelAnimationFrame(frame);
      lastTime = 0;
      if (!motionPreference.matches && !document.hidden) {
        frame = window.requestAnimationFrame(animate);
      } else {
        draw(0);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') pointer = { x: event.clientX, y: event.clientY };
    };
    const clearPointer = () => { pointer = null; };

    resize();
    syncAnimation();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerleave', clearPointer);
    window.addEventListener('blur', clearPointer);
    document.addEventListener('visibilitychange', syncAnimation);
    motionPreference.addEventListener('change', syncAnimation);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', clearPointer);
      window.removeEventListener('blur', clearPointer);
      document.removeEventListener('visibilitychange', syncAnimation);
      motionPreference.removeEventListener('change', syncAnimation);
    };
  }, []);

  return (
    <div className="animated-background" aria-hidden="true">
      <div className="background-glow background-glow-cyan" />
      <div className="background-glow background-glow-purple" />
      <canvas ref={canvasRef} />
    </div>
  );
}
