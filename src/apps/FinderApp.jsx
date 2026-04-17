import { useState } from 'react';
import Window from '../components/Window';
import { finderFiles, monologues } from '../data/gameData';
import useGameStore from '../store/gameStore';

export default function FinderApp() {
  const [path, setPath] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const showHidden = useGameStore((s) => s.showHiddenFiles);
  const toggleHidden = useGameStore((s) => s.toggleHiddenFiles);
  const addClue = useGameStore((s) => s.addClue);
  const showMonologue = useGameStore((s) => s.showMonologue);
  const markSeen = useGameStore((s) => s.markSeen);
  const hasSeen = useGameStore((s) => s.hasSeen);

  const getCurrentFiles = () => {
    let files = [...finderFiles.visible];
    if (showHidden) files = [...files, ...finderFiles.hidden];

    let current = files;
    for (const p of path) {
      const folder = current.find((f) => f.name === p && f.type === 'folder');
      if (folder) current = folder.children;
      else break;
    }
    return current;
  };

  const currentFiles = getCurrentFiles();

  const handleFileClick = (file) => {
    if (file.type === 'folder') {
      setPath([...path, file.name]);
      setSelectedFile(null);
    } else {
      setSelectedFile(file);
      if (file.clue && !hasSeen(`finder_${file.name}`)) {
        markSeen(`finder_${file.name}`);
        addClue(file.clue);
        if (file.name.includes('语音')) {
          showMonologue(monologues.voice_memo);
        } else if (file.name.includes('领养')) {
          showMonologue(monologues.adoption_found);
        }
      }
    }
  };

  const goBack = () => {
    setPath(path.slice(0, -1));
    setSelectedFile(null);
  };

  const getFileIcon = (file) => {
    if (file.type === 'folder') return file.name.startsWith('.') ? '📁' : '📂';
    if (file.name.endsWith('.pdf')) return '📄';
    if (file.name.endsWith('.m4a')) return '🎵';
    if (file.name.endsWith('.jpg')) return '🖼️';
    return '📄';
  };

  return (
    <Window appId="finder" title="Finder" icon="📁">
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Toolbar */}
        <div style={{
          padding: '6px 12px',
          borderBottom: '1px solid var(--divider)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <button
            onClick={goBack}
            disabled={path.length === 0}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: 'none',
              borderRadius: 4,
              color: path.length > 0 ? '#fff' : 'rgba(255,255,255,0.2)',
              padding: '2px 10px',
              cursor: path.length > 0 ? 'pointer' : 'default',
              fontSize: 16,
            }}
          >
            ←
          </button>
          <div style={{ flex: 1, fontSize: 12, opacity: 0.5 }}>
            /{path.join('/')}
          </div>
          <button
            onClick={toggleHidden}
            title={showHidden ? '隐藏隐藏文件' : '显示隐藏文件'}
            style={{
              background: showHidden ? 'rgba(0,122,255,0.3)' : 'rgba(255,255,255,0.08)',
              border: showHidden ? '1px solid var(--accent)' : '1px solid transparent',
              borderRadius: 4,
              color: '#fff',
              padding: '2px 8px',
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            {showHidden ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>

        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* File list */}
          <div style={{ flex: 1, overflow: 'auto', padding: 8 }}>
            {currentFiles.length === 0 ? (
              <div style={{ textAlign: 'center', paddingTop: 40, opacity: 0.3, fontSize: 13 }}>
                文件夹为空
              </div>
            ) : (
              currentFiles.map((file, i) => (
                <div
                  key={i}
                  onClick={() => handleFileClick(file)}
                  style={{
                    padding: '8px 12px',
                    display: 'flex', alignItems: 'center', gap: 10,
                    borderRadius: 6,
                    cursor: 'pointer',
                    background: selectedFile?.name === file.name ? 'rgba(0,122,255,0.2)' : 'transparent',
                    opacity: file.name.startsWith('.') ? 0.6 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (selectedFile?.name !== file.name) e.currentTarget.style.background = 'var(--hover-bg)';
                  }}
                  onMouseLeave={(e) => {
                    if (selectedFile?.name !== file.name) e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <span style={{ fontSize: 20 }}>{getFileIcon(file)}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{file.name}</div>
                    <div style={{ fontSize: 11, opacity: 0.4 }}>
                      {file.type === 'folder' ? `${file.children?.length || 0} 个项目` : '文件'}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Preview pane */}
          {selectedFile && selectedFile.type === 'file' && (
            <div style={{
              width: 280, borderLeft: '1px solid var(--divider)',
              padding: 16, overflow: 'auto',
              background: 'rgba(0,0,0,0.2)',
            }}>
              <div style={{ textAlign: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: 40 }}>{getFileIcon(selectedFile)}</span>
                <div style={{ fontSize: 13, fontWeight: 600, marginTop: 8 }}>{selectedFile.name}</div>
              </div>
              <div style={{
                fontSize: 13, lineHeight: 1.7, opacity: 0.8,
                whiteSpace: 'pre-wrap',
                background: 'rgba(255,255,255,0.04)',
                borderRadius: 8,
                padding: 12,
              }}>
                {selectedFile.content}
              </div>
            </div>
          )}
        </div>
      </div>
    </Window>
  );
}
