import json
import re

transcript_path = r"C:\Users\likhi\.gemini\antigravity-ide\brain\0bf7736d-5a60-4dd1-8ea1-daeb12519876\.system_generated\logs\transcript_full.jsonl"
target_path = r"c:\Users\likhi\OneDrive\Desktop\update smanv\smanv\src\components\Home.tsx"

file_lines_part1 = []
file_lines_part2 = []

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'TOOL_RESPONSE' and 'Home.tsx' in str(data):
                content = data.get('content', '')
                if 'Showing lines 1 to 800' in content:
                    file_lines_part1 = content.split('\n')
                elif 'Showing lines 711 to 918' in content:
                    file_lines_part2 = content.split('\n')
        except:
            pass

def clean_lines(lines, start_prefix):
    cleaned = []
    start_collecting = False
    for line in lines:
        if line.startswith(start_prefix):
            start_collecting = True
        if start_collecting:
            if re.match(r'^\d+:\s', line):
                cleaned.append(re.sub(r'^\d+:\s', '', line))
            else:
                break
    return cleaned

part1 = clean_lines(file_lines_part1, '1:')
part2 = clean_lines(file_lines_part2, '711:')

if part1 and part2:
    final_content = part1[:710] + part2
    with open(target_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(final_content))
    print("DONE. Lines:", len(final_content))
else:
    print("FAILED TO FIND PARTS")
