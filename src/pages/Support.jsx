import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Support() {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = 'https://discord.gg/aF2cRG6k62';
  }, []);

  return <></>;
}