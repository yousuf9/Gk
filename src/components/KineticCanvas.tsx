import React, { useEffect, useRef } from 'react';

export function KineticCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const pointer = {
      x: width * 0.65,
      y: height * 0.35,
      targetX: width * 0.65,
      targetY: height * 0.35,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      pointer.targetX = e.clientX;
      pointer.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const nodes = Array.from({ length: 42 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      radius: i % 5 === 0 ? 2.3 : 1.25,
      hue: i % 3 === 0 ? 'teal' : 'gold',
    }));

    let tick = 0;

    const render = () => {
      tick += 0.0045;
      pointer.x += (pointer.targetX - pointer.x) * 0.07;
      pointer.y += (pointer.targetY - pointer.y) * 0.07;

      ctx.clearRect(0, 0, width, height);

      // Primary cursor-reactive volumetric spotlight
      const grad = ctx.createRadialGradient(
        pointer.x,
        pointer.y,
        8,
        pointer.x,
        pointer.y,
        Math.min(width, height) * 0.52
      );
      grad.addColorStop(0, 'rgba(224, 171, 63, 0.11)');
      grad.addColorStop(0.42, 'rgba(41, 195, 180, 0.05)');
      grad.addColorStop(1, 'rgba(11, 14, 16, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Subtle harmonic silk wave ribbon across the canvas
      ctx.save();
      ctx.beginPath();
      for (let x = 0; x <= width; x += 24) {
        const y =
          height * 0.5 +
          Math.sin(x * 0.0025 + tick * 2.2) * 65 +
          Math.cos(x * 0.004 - tick * 1.5) * 35;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(224, 171, 63, 0.045)';
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.restore();

      // Golden-ratio architectural orbital rings
      ctx.save();
      ctx.translate(width * 0.74, height * 0.44);
      ctx.rotate(tick);
      ctx.strokeStyle = 'rgba(224, 171, 63, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(width, height) * 0.3, 0, Math.PI * 1.4);
      ctx.stroke();

      ctx.rotate(-tick * 1.75);
      ctx.strokeStyle = 'rgba(41, 195, 180, 0.08)';
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(width, height) * 0.4, Math.PI * 0.15, Math.PI * 1.7);
      ctx.stroke();

      ctx.rotate(tick * 0.9);
      ctx.setLineDash([4, 10]);
      ctx.strokeStyle = 'rgba(236, 199, 107, 0.06)';
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(width, height) * 0.48, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Update and connect constellation nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const dxp = pointer.x - n.x;
        const dyp = pointer.y - n.y;
        const distP = Math.hypot(dxp, dyp);
        if (distP < 280 && distP > 1) {
          n.x += (dxp / distP) * 0.22;
          n.y += (dyp / distP) * 0.22;
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle =
          n.hue === 'gold' ? 'rgba(224, 171, 63, 0.5)' : 'rgba(41, 195, 180, 0.5)';
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 175) {
            const alpha = (1 - dist / 175) * 0.13;
            ctx.strokeStyle =
              n.hue === 'gold'
                ? `rgba(224, 171, 63, ${alpha})`
                : `rgba(41, 195, 180, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-95"
    />
  );
}
