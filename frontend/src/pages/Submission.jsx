import React, { useState } from 'react';
import Stepper, { Step } from '../components/Stepper';
import { Check, Trash2 } from 'lucide-react';
import Orb from '../components/Orb';
import { tr } from 'framer-motion/client';

const Submission = () => {
    const [submissionStatus, setSubmissionStatus] = useState(false);
    // Team Leader Details
    const [teamDetails, setTeamDetails] = useState({
        teamName: '',
        leaderName: '',
        collegeName: '',
        linkedIn: '',
        gender: '',
        email: '',
        phone: ''
    });

    // Team Members
    const [teamMembers, setTeamMembers] = useState([
        {
            name: '',
            gender: '',
            email: '',
            phone: '',
            collegeName: ''
        }
    ]);

    // Terms Agreement
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    // Handle team details changes
    const handleTeamDetailsChange = (e) => {
        const { name, value } = e.target;
        setTeamDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle team member changes
    const handleTeamMemberChange = (index, e) => {
        const { name, value } = e.target;
        const updatedMembers = [...teamMembers];
        updatedMembers[index] = {
            ...updatedMembers[index],
            [name]: value
        };
        setTeamMembers(updatedMembers);
    };

    // Add new team member
    const addTeamMember = () => {
        if (teamMembers.length < 3) {
            setTeamMembers(prev => [...prev, {
                name: '',
                gender: '',
                email: '',
                phone: '',
                collegeName: ''
            }]);
        }
    };

    // Add delete member function
    const deleteTeamMember = (indexToDelete) => {
        setTeamMembers(prev => prev.filter((_, index) => index !== indexToDelete));
    };

    const inputClasses = "w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:bg-white/10 outline-none transition-all duration-300 backdrop-blur-sm text-white placeholder:text-white/50";
    const labelClasses = "text-white/60 text-sm font-medium mb-1 ml-1";
    const selectClasses = "w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:bg-white/10 outline-none transition-all duration-300 backdrop-blur-sm text-white [&>option]:bg-black [&>option]:text-white";

    return (
        <div className="min-h-screen w-full bg-black relative">
            {/* Background gradient */}
            <div className='absolute inset-0 bg-[radial-gradient(35%_35%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]'></div>
            {!submissionStatus ? (
                <div className="relative z-10 container mx-auto px-4 py-6 md:py-12 w-full">
                    <Stepper
                        initialStep={1}
                        onStepChange={(step) => {
                            console.log(step);
                        }}
                        onFinalStepCompleted={() => setSubmissionStatus(true)}
                        backButtonText="Previous"
                        nextButtonText="Next"
                    >
                        {/* Step 1: Team Leader Details */}
                        <Step>
                            <div className="w-full backdrop-blur-lg bg-black/30 p-4 md:p-8 rounded-2xl border border-white/10">
                                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Team Registration</h2>
                                <div className="space-y-4 md:space-y-6">
                                    <div>
                                        <label className={labelClasses}>Team Name</label>
                                        <input
                                            type="text"
                                            name="teamName"
                                            value={teamDetails.teamName}
                                            onChange={handleTeamDetailsChange}
                                            placeholder="Enter your team name"
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClasses}>Team Leader Name</label>
                                        <input
                                            type="text"
                                            name="leaderName"
                                            value={teamDetails.leaderName}
                                            onChange={handleTeamDetailsChange}
                                            placeholder="Enter team leader's name"
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClasses}>College Name</label>
                                        <input
                                            type="text"
                                            name="collegeName"
                                            value={teamDetails.collegeName}
                                            onChange={handleTeamDetailsChange}
                                            placeholder="Enter your college name"
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClasses}>LinkedIn Profile</label>
                                        <input
                                            type="url"
                                            name="linkedIn"
                                            value={teamDetails.linkedIn}
                                            onChange={handleTeamDetailsChange}
                                            placeholder="https://linkedin.com/in/username"
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClasses}>Gender</label>
                                        <select
                                            name="gender"
                                            value={teamDetails.gender}
                                            onChange={handleTeamDetailsChange}
                                            className={selectClasses}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className={labelClasses}>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={teamDetails.email}
                                            onChange={handleTeamDetailsChange}
                                            placeholder="Enter your email"
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClasses}>Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={teamDetails.phone}
                                            onChange={handleTeamDetailsChange}
                                            placeholder="Enter your phone number"
                                            className={inputClasses}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Step>

                        {/* Step 2: Team Members */}
                        <Step>
                            <div className="w-full">
                                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Team Members</h2>

                                {teamMembers.map((member, index) => (
                                    <div key={index} className="w-full backdrop-blur-lg bg-black/30 p-4 md:p-8 rounded-2xl border border-white/10 mb-4 md:mb-6 transition-all duration-300 hover:border-purple-500/50 relative group">
                                        {/* Delete Button */}
                                        {index > 0 && (
                                            <button
                                                onClick={() => deleteTeamMember(index)}
                                                className="absolute top-4 right-4 p-2 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-all duration-300 opacity-0 group-hover:opacity-100"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        )}

                                        <h3 className="text-2xl font-semibold mb-6 text-white/90">Team Member {index + 1}</h3>
                                        <div className="space-y-6">
                                            <div>
                                                <label className={labelClasses}>Member Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={member.name}
                                                    onChange={(e) => handleTeamMemberChange(index, e)}
                                                    placeholder="Enter member's name"
                                                    className={inputClasses}
                                                />
                                            </div>
                                            <div>
                                                <label className={labelClasses}>Gender</label>
                                                <select
                                                    name="gender"
                                                    value={member.gender}
                                                    onChange={(e) => handleTeamMemberChange(index, e)}
                                                    className={selectClasses}
                                                >
                                                    <option value="">Select Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className={labelClasses}>Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={member.email}
                                                    onChange={(e) => handleTeamMemberChange(index, e)}
                                                    placeholder="Enter email address"
                                                    className={inputClasses}
                                                />
                                            </div>
                                            <div>
                                                <label className={labelClasses}>Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={member.phone}
                                                    onChange={(e) => handleTeamMemberChange(index, e)}
                                                    placeholder="Enter phone number"
                                                    className={inputClasses}
                                                />
                                            </div>
                                            <div>
                                                <label className={labelClasses}>College Name</label>
                                                <input
                                                    type="text"
                                                    name="collegeName"
                                                    value={member.collegeName}
                                                    onChange={(e) => handleTeamMemberChange(index, e)}
                                                    placeholder="Enter college name"
                                                    className={inputClasses}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {teamMembers.length < 3 && (
                                    <button
                                        onClick={addTeamMember}
                                        className="w-full p-3 md:p-4 mt-4 md:mt-6 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 rounded-lg transition-all duration-300 font-medium text-white/90 hover:text-white shadow-lg hover:shadow-purple-500/25"
                                    >
                                        Add Team Member
                                    </button>
                                )}
                            </div>
                        </Step>

                        {/* Step 3: Rules and Terms */}
                        <Step>
                            <div className="w-full backdrop-blur-lg bg-black/30 p-4 md:p-8 rounded-2xl border border-white/10">
                                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Rules & Terms</h2>

                                <div className="space-y-4 md:space-y-6">
                                    <h3 className="text-xl md:text-2xl font-semibold text-white/90">Hackathon Rules</h3>
                                    <ul className="space-y-3 md:space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-500"></div>
                                            <span className="text-white/80">All team members must be present during the entire duration of the hackathon</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-500"></div>
                                            <span className="text-white/80">Code must be original and created during the hackathon period</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-500"></div>
                                            <span className="text-white/80">Use of open source libraries and APIs is allowed</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-500"></div>
                                            <span className="text-white/80">Teams must submit their projects before the deadline</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-500"></div>
                                            <span className="text-white/80">Plagiarism or use of pre-existing projects is strictly prohibited</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-500"></div>
                                            <span className="text-white/80">Teams must maintain professional conduct throughout the event</span>
                                        </li>
                                    </ul>

                                    <div className="mt-6 md:mt-8 p-3 md:p-4 border border-purple-500/20 rounded-lg bg-purple-500/5 backdrop-blur-sm">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                checked={agreedToTerms}
                                                onChange={(e) => setAgreedToTerms(e.target.checked)}
                                                className="w-4 h-4 md:w-5 md:h-5 rounded border-white/20 text-purple-600 focus:ring-purple-500"
                                            />
                                            <span className="text-white/90 text-sm md:text-base">
                                                I agree to the rules and terms of the hackathon
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </Step>
                    </Stepper>
                </div>
            ) : (
                <div className='flex flex-col items-center justify-center min-h-screen relative'>
                    <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                        <Orb
                            hoverIntensity={0.5}
                            rotateOnHover={true}
                            hue={0}
                            forceHoverState={false}
                        />
                    </div>
                    <div className="flex items-center gap-4 absolute">
                        <h1 className='text-white text-3xl md:text-4xl font-bold'>Registration</h1>
                        <div className='relative'>
                            <div className='absolute inset-0 bg-purple-500/20 blur-xl rounded-full'></div>
                            <div className='relative bg-purple-700/30 backdrop-blur-sm p-3 md:p-4 rounded-full border border-white/10'>
                                <Check className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Submission;