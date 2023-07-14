export default function CountDown() {
  return (
    <div className="countdown">
      <span>Kết thúc sau: </span>
      <div className="countdown_time">
        <div className="box_countdown countdown_hours">
          <p>0</p>
          <span>Giờ</span>
        </div>
        <div className="box_countdown countdown_minutes">
          <p>0</p>
          <span>Phút</span>
        </div>
        <div className="box_countdown countdown_seconds">
          <p>0</p>
          <span>Giây</span>
        </div>
      </div>
    </div>
  );
}
