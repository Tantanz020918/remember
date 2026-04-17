export function TongxueluModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000]"
      onClick={onClose}
    >
      <div
        className="max-w-[90%] max-h-[90%]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src="http://sns-na-i1.xhscdn.com/spectrum/1040g34o31v17dn5ljm004aag908von0h4cnphqo?imageView2/2/w/1080/format/jpg&origin=0"
          alt="同学录"
          className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
        />
        <div className="text-center mt-3">
          <button
            className="px-5 py-2 bg-white/20 text-white border border-white/30 rounded-lg cursor-pointer text-sm backdrop-blur-sm"
            onClick={onClose}
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  )
}
